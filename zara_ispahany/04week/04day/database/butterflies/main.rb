require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

# INDEX
get '/butterflies' do
  @butterflies = query_db 'SELECT * FROM butterflies'
  erb :butterflies_index
end

# NEW
get '/butterflies/new' do
  erb :butterflies_new
end

# CREATE
post '/butterflies' do
  #connect to DB
  # execute insert statemet with params
  #show the butterfly / send the user to the index page
  query_db "INSERT INTO butterflies (name, family, image) VALUES ('#{ params[:name] }', '#{ params[:family] }', '#{ params[:image] }')"
  redirect to ('/butterflies')
end

# SHOW
get '/butterflies/:id' do
  # connect to the DB
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  @butterfly = db.execute "SELECT * FROM butterflies WHERE id=#{ params[:id] }" # returns an array
  @butterfly = @butterfly.first
  # fetch specific butterfly from the DB using its id
  # render the show page
  erb :butterflies_show
end

# DESTROY
get '/butterflies/:id/delete' do
  query_db "DELETE FROM butterflies WHERE id=#{ params[:id] }"
  redirect to ('/butterflies')
  # connect to DB
  # execute delete statemnt in SQL
  # redirect to INDEX
end

# EDIT
get '/butterflies/:id/edit' do
  @butterfly = query_db "SELECT * FROM butterflies WHERE id=#{ params[:id] }"
  @butterfly = @butterfly.first
  erb :butterflies_edit
end

# UPDATE
post '/butterflies/:id' do
  # SQL UPDATE STATEMENT
  query_db "UPDATE butterflies SET name='#{ params[:name] }', family='#{params[:family]}', image='#{params[:image]}' WHERE id=#{params[:id]}"
  redirect to ("/butterflies/#{params[:id]}")
  # redirect to SHOW
end

# CONNECT TO DB
def query_db(sql_statement)
  puts sql_statement # Optional but nice for debugging
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results # Implicitly return
end
