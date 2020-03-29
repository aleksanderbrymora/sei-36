require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)


ActiveRecord::Base.logger = Logger.new(STDERR)


class Fighter < ActiveRecord::Base
end

class Country < ActiveRecord::Base
end
######fighters####################

###home###

get '/' do
  erb :home
end

###index###

get '/fighters' do
  @fighters = Fighter.all
  erb :fighters_index
end

###new###

get '/fighters/new' do
  erb :fighters_new
end

###create###

post '/fighters' do
  fighter = Fighter.new
  fighter.name = params[:name]
  fighter.image = params[:image]
  fighter.save
  redirect to('/fighters')
end

###show###

get '/fighters/:id' do
  @fighter = Fighter.find params[:id]
  erb :fighters_show
end

###edit###

get '/fighters/:id/edit'do
  @fighter = Fighter.find params[:id]
  erb :fighters_edit
end

###update###

post '/fighters/:id' do
  fighter = Fighter.find params[:id]
  fighter.name = params[:name]
  fighter.name = params[:image]
  fighter.save
  redirect to("/fighters/#{ params[:id] }")
end

###destroy###

get '/fighters/:id/delete' do
  fighter = Fighter.find params[:id]
  fighter.destroy
  redirect to('/fighters')
end


#######Countries#########################

###index###
get '/countries' do
  @countries = Country.all
  erb :countries_index
end


###new###

get '/countries/new' do
  erb :countries_new
end

###create###

post '/countries' do
  country = Country.new
  country.name = params[:name]
  country.image = params[:image]
  country.save
  redirect('/countries')
end

###show###

get '/countries/:id' do
  @country = Country.find params[:id]
  erb :countries_show
end

###edit###

get '/countries/:id/edit'do
  @country = Country.find params[:id]
  erb :countries_edit
end

###update###

post '/countries/:id' do
  country = Country.all
  country.name = params[:name]
  country.image = params[:image]
  redirect to("/countries/#{ params[:id] }")
end

###destroy###

get '/countries/:id/delete' do
  country = Country.find params[:id]
  country.destroy
  redirect to('/countries')
end
