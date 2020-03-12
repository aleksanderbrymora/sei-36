require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'SQLite3'
require 'active_record'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

# Model: class + a database table
class Label < ActiveRecord::Base
end

class Artist < ActiveRecord::Base
end

# HOME
get '/' do
  erb :home
end

# LABELS #############################

# INDEX
get '/labels' do
  @labels = Label.all
  erb :labels_index
end

# NEW
get '/labels/new' do
  erb :labels_new
end

# CREATE
post '/labels' do
  label = Label.new
  label.name = params[:name]
  label.location = params[:location]
  label.established = params[:established]
  label.image = params[:image]
  label.save
  redirect to ("/labels/#{label.id}")
end

# SHOW
get '/labels/:id' do
  @label = Label.find params[:id]
  erb :labels_show
end

# EDIT
get '/labels/:id/edit' do
  @label = Label.find params[:id]
  erb :labels_edit
end

# UPDATE
post '/labels/:id' do
  label = Label.find params[:id]
  label.name = params[:name]
  label.location = params[:location]
  label.established = params[:established]
  label.image = params[:image]
  label.save
  redirect to ("/labels/#{params[:id]}")
end

# DESTROY
get '/labels/:id/delete' do
  label = Label.find params[:id]
  label.destroy
  redirect to ("/labels")
end


# ARTISTS ###############################

# INDEX
get '/artists' do
  @artists = Artist.all
  erb :artists_index
end

# NEW
get '/artists/new' do
  erb :artists_new
end

# CREATE
post '/artists' do
  artist = Artist.new
  artist.name = params[:name]
  artist.genre = params[:genre]
  artist.location = params[:location]
  artist.top_track = params[:top_track]
  artist.label = params[:label]
  artist.image = params[:image]
  artist.save
  redirect to ("/artists/#{artist.id}")
end

# SHOW
get '/artists/:id' do
  @artist = Artist.find params[:id]
  erb :artists_show
end

# EDIT
get '/artists/:id/edit' do
  @artist = Artist.find params[:id]
  erb :artists_edit
end

# UPDATE
post '/artists/:id' do
  artist = Artist.find params[:id]
  artist.name = params[:name]
  artist.genre = params[:genre]
  artist.location = params[:location]
  artist.top_track = params[:top_track]
  artist.label = params[:label]
  artist.image = params[:image]
  artist.save
  redirect to ("/artists/#{params[:id]}")
end

# DELETE
get '/artists/:id/delete' do
  artist = Artist.find params[:id]
  artist.destroy
  redirect to ("/artists")
end
