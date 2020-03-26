require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'


#####Function###############

def query_db(sql_statement)
  puts sql_statement
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results
end


#####Home###############


get '/' do
  erb :home
  #Go to the home page#
end



#####Index###############


get '/pokemons' do
  @pokemons =query_db 'SELECT * FROM pokemons'
  erb :pokemons_index
  # require'pry'
  # binding.pry
  #Go to the index page
end


#####New###############


get '/pokemons/new' do
  erb :pokemons_new
  # go to the new page
end


#####Create###############


post '/pokemons' do
  db = SQLite3::Database.new 'database.sqlite3'
  db.execute "Insert INTO pokemons (name, type, image) VALUES (' #{ params[:name]}',
  '#{ params[:type]}', '#{ params[:image] }')"
  redirect to ('/pokemons')
end


#####Show###############


get '/pokemons/:id' do
  @pokemon = query_db "SELECT * FROM pokemons WHERE id=#{ params[:id] }" # Array of hash
  @pokemon = @pokemon.first #to access to object#
  erb :pokemons_show
end


#####Edit###############


get '/pokemons/:id/edit' do
  @pokemon = query_db "SELECT * FROM pokemons WHERE id=#{ params[:id] }"
  # require "pry"
  # binding.pry
  @pokemon = @pokemon.first
  erb :pokemons_edit
end


#####Update###############


post '/pokemons/:id' do
  query_db "UPDATE pokemons SET name='#{ params[:name] }',type='#{ params[:type]}',image='#{ params["image"]}' WHERE id='#{ params[:id].to_i}'"
  redirect to("/pokemons/#{ params[:id]}")
end



#####Delete###############


get '/pokemons/:id/delete' do
  query_db "DELETE FROM pokemons WHERE id=#{ params[:id].to_i}"
  redirect to ('/pokemons')
end
