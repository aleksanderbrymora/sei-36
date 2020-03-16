require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

# convention over configuration

get '/' do
  erb :home # embedded ruby
end


get '/butterflies' do
  @butterflies = query_db "SELECT * FROM butterflies "
  erb :butterflies_index
end

get '/butterflies/new' do
  erb :butterflies_new
end

get '/butterflies/:id' do
  @butterflies = query_db "SELECT * FROM butterflies WHERE id=#{ params[:id] }" #Array #noquotes in params for integer
  @butterflies = @butterflies.first
  # connect to the # DEBUG:
  # fetch the specific butterfly from the db using its id
  erb :butterflies_show
end

# create
post '/butterflies' do
  query_db "INSERT INTO butterflies (name, family, image) VALUES ('#{ params[:name] }', '#{ params[:family] }', '#{ params[:image] }')" #quotes in param for string
  redirect to('/butterflies')
end

# Destroy

get '/butterflies/:id/delete' do
query_db "DELETE FROM butterflies WHERE id = #{ params[:id] }"# connect to db
redirect to('/butterflies')#Execute to delete command
# redirect to index
end

get '/butterflies/:id/edit' do
  @butterflies = query_db "SELECT * FROM butterflies WHERE id=#{ params[:id] }" # Array
  @butterflies = @butterflies.first
  erb :butterflies_edit
end

def query_db(sql_statement)
  puts sql_statement
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true #to give as hash not as array
  results = db.execute sql_statement
  db.close
  results #implicitly return
end

# UPDATE
post '/butterflies/:id' do
  query_db "UPDATE butterflies SET name='#{ params[:name] }', family='#{ params[:family] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
  redirect to("/butterflies/#{ params[:id] }") # GET request
end
