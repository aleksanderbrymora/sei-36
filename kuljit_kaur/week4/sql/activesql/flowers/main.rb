require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

# Rails sets this up for you automatically
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

# Optional bonus
ActiveRecord::Base.logger = Logger.new(STDERR)

# Model: class + a database table
class Flower < ActiveRecord::Base
end

# Model: class + a database table
class Shop < ActiveRecord::Base
end

get '/' do
  erb :home
end

# INDEX
get '/flowers' do
  @flowers = Flower.all
  erb :show
end

# NEW
get '/flowers/Add' do
  erb :create
end

# CREATE
post '/flowers' do
  flower = Flower.new
  flower.name = params[:name]
  flower.sun_needs = params[:sun_needs]
  flower.soil_needs = params[:soil_needs]
  flower.bloom_in = params[:bloom_in]
  flower.image = params[:image]
  flower.save
  redirect to("/flowers/#{ flower.id }") # SHOW
end

# SHOW
get '/flowers/:id' do
  @flower = Flower.find params[:id]
  erb :show_flower
end

# EDIT
get '/flowers/:id/update' do
  @flower = Flower.find params[:id]
  erb :update
end

# UPDATE
post '/flowers/:id' do
  flower = Flower.find params[:id]
  flower.name = params[:name]
  flower.sun_needs = params[:sun_needs]
  flower.soil_needs = params[:soil_needs]
  flower.bloom_in = params[:bloom_in]
  flower.image = params[:image]
  flower.save
  redirect to("/flowers/#{ params[:id] }") # GET request
end

# DESTROY
get '/flowers/:id/delete' do
  flower = Flower.find params[:id]
  flower.destroy # :(
  redirect to('/flowers')
end

after do
  ActiveRecord::Base.connection.close
end

#-----------------------------------------------------------------------------
# Shops
# -----------------------------------------------------------------------------

get '/' do
  erb :home_shop
end

# INDEX
get '/shops' do
  @shops = Shop.all
  erb :show_shops
end

# NEW
get '/shops/Add' do
  erb :create_shop
end

# CREATE
post '/shops' do
  shop = Shop.new
  shop.shop_name = params[:shop_name]
  shop.flower_name = params[:flower_name]
  shop.website = params[:website]
  shop.save
  redirect to("/shops/#{ shop.id }") # SHOW
end

# SHOW
get '/shops/:id' do
  @shop = Shop.find params[:id]
  erb :show_each_shop
end

# EDIT
get '/shops/:id/update' do
  @shop = Shop.find params[:id]
  erb :update_shop
end

# UPDATE
post '/shops/:id' do
  shop = Shop.find params[:id]
  shop.shop_name = params[:shop_name]
  shop.flower_name = params[:flower_name]
  shop.website = params[:website]
  shop.save
  redirect to("/shops/#{ params[:id] }") # GET request
end

# DESTROY
get '/shops/:id/delete' do
  shop = Shop.find params[:id]
  shop.destroy # :(
  redirect to('/shops')
end

after do
  ActiveRecord::Base.connection.close
end
