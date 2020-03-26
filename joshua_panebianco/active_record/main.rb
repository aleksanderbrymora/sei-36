require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

# Rails sets this up
ActiveRecord::Base.establish_connection(
	:adapter => 'sqlite3',
	:database => 'database.sqlite3'
)

# Bonus
ActiveRecord::Base.logger = Logger.new(STDERR)

# Model: class + a database table
class Shoe < ActiveRecord::Base
end

class Sock < ActiveRecord::Base
end


get '/' do
	erb:home
end

# Index
get '/shoes' do
	@shoes = Shoe.all
	erb :shoes_index
end

# New
get '/shoes/new' do
	erb :shoes_new
end

#create
post '/shoes' do
	shoe = Shoe.new
	shoe.brand = params[:brand]
	shoe.kind = params[:kind]
	shoe.image = params[:image]
	shoe.save
	redirect to("/shoes/#{ shoe.id }")
end

# Show
get '/shoes/:id' do
	@shoe = Shoe.find params[:id]
	erb :shoes_show
end

#edit
get '/shoes/:id/edit' do
	@shoe = Shoe.find params[:id]
	erb :shoes_edit
end

# Update
post '/shoes/:id' do
  shoe = Shoe.find params[:id]
	shoe.brand = params[:brand]
	shoe.kind = params[:kind]
	shoe.image = params[:image]
	shoe.save
	redirect to("/shoes/#{ params[:id]}")
end

# Destory
get '/shoes/:id/delete' do
	shoe = Shoe.find params[:id]
	shoe.destory
	redirect to('/shoes')
end

# Socks ##################################

get '/socks' do
  # "Hello World"
	@socks = Sock.all
	erb :socks_index
end

get '/socks/new' do
  erb :socks_new
end


# New
get '/socks/new' do
	erb :socks_new
end

#create
post '/socks' do
	sock = Sock.new
	sock.kind = params[:kind]
	sock.color = params[:color]
	sock.save
	redirect to("/socks/#{ sock.id }")
end

# Show
get '/socks/:id' do
	@socks = Sock.find params[:id]
	erb :socks_show
end

#edit
get '/socks/:id/edit' do
	@sock = Sock.find params[:id]
	erb :socks_edit
end

# Update
post '/socks/:id' do
  sock = Sock.find params[:id]
	sock.kind = params[:kind]
	sock.color = params[:color]
	sock.save
	redirect to("/socks/#{ params[:id]}")
end

# Destory
get '/socks/:id/delete' do
	sock = Sock.find params[:id]
	sock.destory
	redirect to('/socks')
end
