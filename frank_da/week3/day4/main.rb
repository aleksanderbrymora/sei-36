require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

get '/' do
    erb :home
end

get '/guitars' do
    @guitars = query_db "SELECT * FROM guitars"
    erb :guitars_index
end

get '/guitars/new' do
    erb :guitars_new
end

post '/guitars' do
    query_db "INSERT INTO guitars (brand, model, image) VALUES ('#{params[:brand]}', '#{params[:model]}', '#{params[:image]}')"
    redirect to ('/guitars')
end

post '/guitars/:id' do
    query_db "UPDATE guitars SET brand='#{params[:brand]}', model='#{params[:model]}', image='#{params[:image]}' WHERE id=#{params[:id]}"
    redirect to ("/guitars/#{params[:id]}")
end

get '/guitars/:id' do
    @guitars = query_db "SELECT * FROM guitars WHERE id=#{params[:id]}"
    @guitar = @guitars.first
    erb :guitars_show
end

get '/guitars/:id/edit' do
    @guitars = query_db "SELECT * FROM guitars WHERE id=#{params[:id]}"
    @guitar = @guitars.first
    erb :guitars_edit
end

get '/guitars/:id/delete' do
    query_db "DELETE FROM guitars WHERE id=#{params[:id]}"
    redirect to ('/guitars')
end

def query_db (sql_statement)
    puts sql_statement
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    result = db.execute sql_statement
    db.close
    result
end