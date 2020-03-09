require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'sqlite3'

get '/' do
  erb :home
end

# INDEX
get '/albums' do
  @albums = query_db('SELECT * FROM albums')
  erb :albums_index
end

# NEW
get '/albums/new' do
  erb :albums_new
end

# RANDOM SHOW
get '/albums/random' do
  @albums = query_db "SELECT * FROM albums"
  @album = @albums.sample

  erb :albums_show
end

# SHOW
get '/albums/:id' do
  @albums = query_db("SELECT * FROM albums WHERE id=#{ params[:id] }")
  @album = @albums.first
  erb :albums_show
end

# CREATE
post '/albums' do
  # connect to database
  query_db "INSERT INTO albums (artist, album, year, image) VALUES ('#{params[:artist]}', '#{params[:album]}','#{params[:year]}','#{params[:image]}')"
  redirect to ('/albums')
end

# EDIT
get '/albums/:id/edit' do
  @albums = query_db("SELECT * FROM albums WHERE id=#{ params[:id] }")
  @album = @albums.first
  erb :albums_edit
end

# UPDATE
post '/albums/:id' do
  query_db "UPDATE albums SET artist='#{params[:artist]}', album='#{params[:album]}', year='#{params[:year]}', image='#{params[:image]}' WHERE id=#{params[:id]}"
  # Redirect to albums show
  redirect to ("/albums/#{params[:id]}")
end

# DESTROY
get '/albums/:id/delete' do
  @albums = query_db "DELETE FROM albums WHERE id=#{params[:id]}"
  redirect to ('/albums')
end

def query_db(sql_statement)
  puts sql_statement
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results
end
