require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
	erb :home
end

# index
get '/video_games' do
	@video_games = query_db 'SELECT * FROM video_games'
	erb :video_games_index
end

# CREATE
post '/video_games' do
   db = SQLite3::Database.new 'database.sqlite3'
	 db.execute "INSERT INTO video_games (title, console, cover) VALUES ('#{ params[:name]}', '#{ params[:console] }', '#{ params[:image] }') "
	 redirect to('video_games')
end

# Add new
get '/video_games_new' do
	erb :video_games_new
end

# Edit
get '/video_games_edit' do
  erb :video_games_edit
end


def query_db(sql_statement)
	puts sql_statement
	db = SQLite3::Database.new 'database.sqlite3'
	db.results_as_hash = true
	results = db.execute sql_statement
	db.close
	results # Impicity return
end
