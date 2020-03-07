require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'sqlite3'
require 'pry'


ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)


ActiveRecord::Base.logger = Logger.new(STDERR)

class Club < ActiveRecord::Base
  belongs_to :league, :optional => true
end

class League < ActiveRecord::Base
  has_many :clubs
end

get '/pry' do
  binding.pry
end

get '/' do
  erb :home
end


get '/clubs' do
  @clubs = Club.all
  erb :clubs_index
end


get '/clubs/new' do
  erb :clubs_new
end


post '/clubs' do
  team = Club.new
  team.name = params[:name]
  team.image = params[:image]
  team.league_id = params[:league_id]
  team.save
  redirect to("/clubs/#{ team.id }") 
end


get '/clubs/:id' do
  @team = Club.find params[:id]
  erb :team_show
end


get '/clubs/:id/edit' do
  @team = Club.find params[:id]
  erb :clubs_edit
end


post '/clubs/:id' do
  team = Club.find params[:id]
  team.name = params[:name]
  team.country = params[:family]
  team.image = params[:image]
  team.eague_id = params[:plant_id]
  team.save
  redirect to("/clubs/#{ params[:id] }") 
end


get '/clubs/:id/delete' do
  team = Club.find params[:id]
  team.destroy
  redirect to("/clubs")
end


get '/leagues' do
  @leagues = League.all
  erb :leagues_index
end

# NEW
get '/leagues/new' do
  erb :leagues_new
end

# CREATE
post '/leagues' do
  league = League.new
  league.name = params[:name]
  league.image = params[:image]
  league.save
  redirect to("/leagues/#{ league.id }")
end

# SHOW
get '/leagues/:id' do
  @league = League.find params[:id]
  erb :leagues_show
end

# EDIT
get '/leagues/:id/edit' do
  @league = League.find params[:id]
  erb :leagues_edit
end

# UPDATE
post '/leagues/:id' do
  league = League.find params[:id]
  league.name = params[:name]
  league.image = params[:image]
  league.save
  redirect to("/leagues/#{ league.id }")
end

# DELETE
get '/leagues/:id/delete' do
  league = League.find params[:id]
  league.destroy
  redirect to("/leagues")
end

after do
  ActiveRecord::Base.connection.close
end
