require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

# CONNECT TO DB
def query_db(sql_statement)
  puts sql_statement # Optional but nice for debugging
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results # Implicitly return
end

get '/' do
  erb :home
end

# INDEX
get '/characters' do
  @ac_characters = query_db 'SELECT * FROM animal_crossing'
  erb :characters
end

# NEW CHARACTER PAGE
get '/characters/new' do
  erb :characters_new
end

# UPDATE NEW CHARACTER / CREATE
post '/characters' do
  query_db "INSERT INTO animal_crossing (name, species, image) VALUES ('#{ params[:name] }', '#{ params[:species] }', '#{ params[:image] }')"
  redirect to ('/characters')
end

# CHARACTER PAGE / SHOW
get '/characters/:id' do
  @character = query_db "SELECT * FROM animal_crossing WHERE id=#{ params[:id] }"
  @character = @character.first
  erb :characters_page
end

# DELETE CHARACTER / DESTROY
get '/characters/:id/delete' do
  query_db "DELETE FROM animal_crossing WHERE id=#{ params[:id] }"
  redirect to ('/characters')
end

# EDIT CHARACTER PAGE
get '/characters/:id/edit' do
  @character = query_db "SELECT * FROM animal_crossing WHERE id=#{ params[:id] }"
  @character = @character.first
  erb :characters_edit
end

# UPDATE CHARACTER WHICH REDIRECTS TO CHARACTER PAGE
post '/characters/:id' do
  query_db "UPDATE animal_crossing SET name='#{ params[:name] }', species='#{params[:species]}', image='#{params[:image]}' WHERE id=#{params[:id]}"
  redirect to ("/characters/#{params[:id]}")
end
