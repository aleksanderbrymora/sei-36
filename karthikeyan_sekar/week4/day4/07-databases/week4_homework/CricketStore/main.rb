require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

# Rails sets this up for you automatically
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.SQLite3'
)

# Optional bonus
ActiveRecord::Base.logger = Logger.new(STDERR)

# Model: class + a database table
class Cricket < ActiveRecord::Base
end

get '/' do
  erb :home
end

# INDEX
get '/cricket' do
  @bats = Cricket.all
  erb :cricket_index
end

# NEW
get '/cricket/new' do
  erb :cricket_new
end

# CREATE
post '/cricket' do
  cricket = Cricket.new
  cricket.brand = params[:brand]
  cricket.price = params[:price]
  cricket.size = params[:size]
  cricket.model = params[:type]
  cricket.image = params[:image]
  cricket.save
  redirect to("/cricket/#{ cricket.id }") # SHOW
end

# SHOW
get '/cricket/:id' do
  @cricket = Cricket.find params[:id]
  erb :cricket_show
end

# EDIT
get '/cricket/:id/edit' do
  @cricket = Cricket.find params[:id]
  erb :cricket_edit
end

# UPDATE
post '/cricket/:id' do
  cricket = Cricket.find params[:id]
  cricket.brand = params[:brand]
  cricket.price = params[:price]
  cricket.size = params[:size]
  cricket.model = params[:type]
  cricket.image = params[:image]
  cricket.save
  redirect to("/cricket/#{ params[:id] }") # GET request
end

# DESTROY
get '/cricket/:id/delete' do
  cricket = Cricket.find params[:id]
  cricket.destroy # :(
  redirect to('/cricket')
end


after do
  ActiveRecord::Base.connection.close
end
