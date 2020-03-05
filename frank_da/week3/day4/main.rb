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

get '/guitars/:id' do
    @guitars = query_db "SELECT * FROM guitars WHERE id=#{params[:id]}"
    @guitar = @guitars.first
    erb :guitars_show
end

def query_db (sql_statement)
    puts sql_statement
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    result = db.execute sql_statement
    db.close
    result
end