require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

# Rail sets this up auto
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

# Optional Bonus
ActiveRecord::Base.logger = Logger.new(STDERR)

# Model: class + database table
class Butterfly < ActiveRecord::Base
end

class Plant < ActiveRecord::Base
end

get '/' do
  erb :home
end

# INDEX
get '/butterflies' do
  @butterflies = Butterfly.all
  erb :butterflies_index
end

# NEW
get '/butterflies/new' do
  erb :butterflies_new
end

# CREATE
post '/butterflies' do
  #connect to DB
  # execute insert statemet with params
  #show the butterfly / send the user to the index page
  butterfly = Butterfly.new
  butterfly.name = params[:name]
  butterfly.family = params[:family]
  butterfly.image = params[:image]
  butterfly.save
  redirect to ('/butterflies/#{ butterfly.id }')
end

# SHOW
get '/butterflies/:id' do
  @butterfly = Butterfly.find params[:id]
  erb :butterflies_show
end

# DESTROY
get '/butterflies/:id/delete' do
  butterfly = Butterfly.find params[:id]
  butterfly.destroy
  redirect to ('/butterflies')
end

# EDIT
get '/butterflies/:id/edit' do
  @butterfly = Butterfly.find params[:id]
  erb :butterflies_edit
end

# UPDATE
post '/butterflies/:id' do
  butterfly = Butterfly.find params[:id]
  butterfly.name = params[:name]
  butterfly.family = params[:family]
  butterfly.image = params[:image]
  butterfly.save
  redirect to ("/butterflies/#{params[:id]}")
end

# Plants #######################

# INDEX
get '/plants' do
  @plants = Plant.all
  erb :plants_index
end

# NEW
get '/plants/new' do
  erb :plants_new
end

# CREATE
post '/plants' do
  plant = Plant.new
  plant.name = params[:name]
  plant.image = params[:image]
  plant.save
  redirect to ("/plants/#{ plant.id }")
end

# SHOW
get '/plants/:id' do
  # fetch the plant
  @plant = Plant.find params[:id]
    # render the view
  erb :plants_show
end

# EDIT
get '/plants/:id/edit' do
  @plant = Plant.find params[:id]
  erb :plants_edit
end

# UPDATE
post '/plants/:id' do
  plant = Plant.find params[:id]
  plant.name = params[:name]
  plant.image = params[:image]
  plant.save
  redirect to ("/plants/#{plant.id}")
end

# DELETE
get '/plants/:id/delete' do
  plant = Plant.find params[:id]
  plant.destroy
  redirect to ("/plants") # INDEX
end

after do # close the server wont need for rails
  ActiveRecord::Base.connection.close
end
