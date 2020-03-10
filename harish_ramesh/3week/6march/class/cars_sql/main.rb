require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'


ActiveRecord ::Base.establish_connection(
  :adapter => "sqlite3",
  :database => "carsdata.sqlite3"
)

ActiveRecord ::Base.logger = Logger.new(STDERR)

class Butterfly < ActiveRecord::Database
end



get '/' do
  erb :home
end

#-- INDEX PAGE
get '/cars' do
  @cars = Cars.all
  erb :cars_index
end

#-- NEW
get '/cars/new' do
  erb :cars_new
end

#-- ADD CAR
post '/cars' do
  query_db "INSERT INTO cars (brand, model, style, image) VALUES ('#{ params[:brand] }', '#{ params[:model] }', '#{ params[:style] }', '#{ params[:image] }')"
  car = Car.new
  redirect to('/cars')
end

#-- SHOW RESULT
get '/cars/:id' do
  @car = query_db "SELECT * FROM cars WHERE id=#{ params[:id] }" # Array
  @car = @car.first
  erb :cars_show
end

# EDIT
get '/cars/:id/edit' do
  @car = query_db "SELECT * FROM cars WHERE id=#{ params[:id] }" # Array
  @car = @car.first
  erb :cars_edit
end

# UPDATE
post '/cars/:id' do
  query_db "UPDATE cars SET brand='#{ params[:brand] }', model='#{ params[:model] }', style='#{ params[:style] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
  redirect to("/cars/#{ params[:id] }") # GET request
end

# Delete
get '/cars/:id/delete' do
  query_db "DELETE FROM cars WHERE id=#{ params[:id] }"
  redirect to('/cars')
end

def query_db(sql_statement)
  puts sql_statement # Optional but nice for debugging.
  db = SQLite3::Database.new 'carsdata.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results # Implicitly return
end
