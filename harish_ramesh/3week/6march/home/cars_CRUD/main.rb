require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'carsdata.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)
class Car < ActiveRecord::Base
  has_many :celebs
end

class Celeb < ActiveRecord::Base
  belongs_to :car, :optional => true
end

get '/' do
  erb :home
end

#-- INDEX PAGE
get '/cars' do
  @cars = Car.all
  erb :cars_index
end

#-- NEW
get '/cars/new' do
  erb :cars_new
end

#-- ADD CAR
post '/cars' do
  car = Car.new
  car.brand = params[:brand]
  car.model = params[:model]
  car.style = params[:style]
  car.image = params[:image]
  car.save
  redirect to('/cars')
end

#-- SHOW RESULT
get '/cars/:id' do
  @car = Car.find params[:id]
  erb :cars_show
end

# EDIT
get '/cars/:id/edit' do
  @car = Car.find params[:id]
  erb :cars_edit
end

# UPDATE
post '/cars/:id' do
  car = Car.find params[:id]
  car.brand = params[:brand]
  car.model = params[:model]
  car.style = params[:style]
  car.image = params[:image]
  car.save
  redirect to("/cars/#{ params[:id] }") # GET request
end

# Delete
get '/cars/:id/delete' do
  car = Car.find params[:id]
  car.destroy
  redirect to('/cars')
end

################################# celebs
#index
get '/celebs' do
  @celebrities = Celeb.all
  erb :celebs_index
end

#-- NEW
get '/celebs/new' do
  erb :celebs_new
end

#-- ADD CAR
post '/celebs' do
  celebrity = Celeb.new
  celebrity.name = params[:name]
  celebrity.profession = params[:profession]
  celebrity.car = params[:car]
  celebrity.image = params[:image]
  celebrity.car_id = params[:car_id]
  celebrity.save
  redirect to('/celebs')
end

#-- SHOW RESULT
get '/celebs/:id' do
  @celebrity = Celeb.find params[:id]
  erb :celebs_show
end

# EDIT
get '/celebs/:id/edit' do
  @celebrity = Celeb.find params[:id]
  erb :celebs_edit
end

# UPDATE
post '/celebs/:id' do
  celebrity = Celeb.find params[:id]
  celebrity.name = params[:name]
  celebrity.profession = params[:profession]
  celebrity.car = params[:car]
  celebrity.image = params[:image]
  celebrity.save
  redirect to("/celebs/#{ params[:id] }") # GET request
end

# Delete
get '/celebs/:id/delete' do
  celebrity = Celeb.find params[:id]
  celebrity.destroy
  redirect to('/celebs')
end

after do
  ActiveRecord::Base.connection.close
end
