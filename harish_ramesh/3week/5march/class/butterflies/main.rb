require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end


#index page
get '/butterflies' do
  # db = SQLite3::Database.new 'database.sqlite3'
  # db.results_as_hash = true
  # @butterflies = db.execute 'SELECT * FROM butterflies '
  # erb :butterflies_index
  @butterflies = query_db 'SELECT * FROM butterflies '
  erb :butterflies_index
end

#new

get '/butterflies/new' do
  erb :butterflies_new
end

#CREATE

post '/butterflies' do
  #connect to # DB
  # db = SQLite3::Database.new 'database.sqlite3'
  # db.execute
  query_db "INSERT INTO butterflies (name, family, image) VALUES ('#{params[:name]}','#{params[:family]}','#{params[:image]})'"
  #execute a insert statement with params
  #send the user to insert page
  redirect to('/butterflies')
end

#show

get '/butterflies/:id' do
  #connect to Database
  # db = SQLite3::Database.new 'database.sqlite3'
  # db.results_as_hash = true
  @butterfly = db_query "SELECT * FROM butterflies WHERE id=#{params[:id]}"
  @butterfly = @butterfly.first
  #fetch specific butterfly
  #render the show page
  erb :butterflies_show
end

#edit
get '/butterflies/:id/edit' do
  @butterfly = query_db "SELECT * FROM butterflies WHERE id=#{params[:id]}"
  @butterfly =@butterfly.first
  erb :butterflies_edit
end

#update
post '/butterflies/:id' do
  "UPDATE butterflies SET name='#{params[:name]}', family='#{params[:family]}',image=#{params[:image]}' WHERE id=#{params[:id]}'"
  redirect to   
end
#delete / destroy

get '/butterflies/:id/delete' do

end


def query_db(sql_statement)
  puts sql_statement #optional but nice for debugging
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results #implicitly retuen the results
end
