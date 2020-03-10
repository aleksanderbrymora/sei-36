require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'



get '/' do
 erb :home
end

# INDEX
get '/bmws' do
  @bmws = query_db('SELECT * FROM bmws')
  erb :bmw_index
end

# NEW
get '/bmw/new' do
  erb :bmw_new
end

# CREATE
post '/bmw' do
  @bmw = query_db("INSERT INTO bmws (family, model,year,image) VALUES ('#{params[:family]}','#{params[:model]}','#{params[:year]}','#{params[:image]}');")
  redirect to('/bmws')
end

# SHOW
get '/bmw/:id' do
  # connect to db
  # fetch the butterfly based on id
  @bmw = query_db("SELECT * FROM bmws WHERE id=#{params[:id]}")
  @bmw = @bmw.first
  erb :bmw_show
end

# EDIT
get '/bmw/:id/edit' do
  @bmw = query_db("SELECT * FROM bmws WHERE id=#{params[:id]}")
  @bmw = @bmw.first
  erb :bmw_edit
end

# UPDATE
post '/bmw/:id' do
  query_db "UPDATE bmws SET family='#{params[:family]}',model='#{params[:model]}',year=#{params[:year]},image='#{params[:image]}' WHERE id=#{params[:id]}"
  redirect to("/bmw/#{params[:id]}")
end

# DELETE
get '/bmw/:id/delete' do
  query_db("DELETE FROM bmws WHERE id=#{params[:id]}")
  redirec to('/bmw')
end

def query_db(sql_statement)
  puts sql_statement # Show th query
  db = SQLite3::Database.new 'bmw.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results # Implicitly return
end
