require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

#Model: class + database table
class Team < ActiveRecord::Base
  has_many :drivers
end

class Driver < ActiveRecord::Base
  belongs_to :team
end


get '/' do
  erb :home
end

get '/drivers' do
  @drivers = Driver.all
  erb :drivers_index
end

get '/drivers/new' do
  erb :drivers_new
end

post '/drivers' do
    driver = Driver.new
    driver.name = params[:name]
    driver.team = params[:team]
    driver.podiums = params[:podiums]
    driver.image = params[:image]
    driver.save
    redirect to('/drivers')
end

get '/drivers/:id' do
  @driver = Driver.find params[:id]
  erb :drivers_show
end

get '/drivers/:id/edit' do
  @driver = Driver.find params[:id]
  erb :drivers_edit
end

post '/drivers/:id' do
  driver = Driver.find params[:id]
  driver.name = params[:name]
  driver.team = params[:team]
  driver.podiums = params[:podiums]
  driver.image = params[:image]
  driver.save
  redirect to("/drivers/#{params[:id]}")
end

get '/drivers/:id/delete' do
  driver = Driver.find params[:id]
  driver.destroy
  redirect to ('/drivers')
end

get '/teams' do
  @teams = Team.all
  erb :teams_index
end

get '/teams/:id' do
    @team = Team.find params[:id]
    erb :teams_show
end

after do
  ActiveRecord::Base.connection.close
end
