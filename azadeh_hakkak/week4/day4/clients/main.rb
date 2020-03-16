require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

# All clients
get '/clients' do
  @clients = query_db 'SELECT * FROM clients'
erb :clients_all
end

# NEW
get '/clients/new' do
  erb :client_new
end

# CREATE
post '/clients' do
  query_db "INSERT INTO clients (first_name, last_name, contact_number, image) VALUES ('#{ params[:first_name].capitalize }', '#{ params[:last_name].upcase }', '#{ params[:contact_number]}', '#{ params[:image]}')"
  redirect to('/clients')
end


# SHOW
get '/clients/:id' do
  @client = query_db "SELECT * FROM clients WHERE id=#{ params[:id] }" # Array
  @client = @client.first
  erb :client_show
end

 # Edit
get '/clients/:id/edit' do
@client = query_db "SELECT * FROM clients WHERE id=#{ params[:id]}"
@client = @client.first
erb :client_edit
end

# Update
post '/clients/:id' do
  query_db "UPDATE clients SET first_name='#{ params[:first_name].capitalize }', last_name='#{ params[:last_name].upcase }', contact_number='#{ params[:contact_number] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
  redirect to('/clients')
end

# DELETE
get '/clients/:id/delete' do
  query_db "DELETE FROM clients WHERE id=#{ params[:id] }"
  redirect to('/clients')
end




def query_db(sql_statement)
  puts sql_statement # Optional but nice for debugging.
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results # Implicitly return
end
