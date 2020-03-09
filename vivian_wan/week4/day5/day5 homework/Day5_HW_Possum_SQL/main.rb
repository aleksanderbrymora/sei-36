
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
class Possum < ActiveRecord::Base #what is happening here? Assigning a global class called POSSUM but why?
end

get '/' do
    erb :home
  end

#INDEX
get '/possums' do
        @possums = Possum.all #ok this is getting ALL possums but why @possum? what does this mean?
        erb :possums_index
end

#NEW
get '/possums/new' do #get info for this new possum from a form
    erb :possums_new
end

#CREATE
    post '/possums' do #post this new possum's info
    possum = Possum.new
    possum.name = params[:name]
    possum.year = params[:year] 
    possum.image = params[:image] 
    possum.save #can determine whether it's an update or insert
    redirect to ("/possums/#{ possum.id }") # SHOW

end

#SHOW
get '/possums/:id' do #fetch the right possum by id
    @possum = Possum.find params[:id]
    erb :possums_show
end

#EDIT
get '/possums/:id/edit' do
    @possum = Possum.find params[:id]
    erb :possums_edit
end

#UPDATE
post '/possums/:id' do
    possum = Possum.find params[:id]
    possum.name = params[:name]
    possum.year = params[:year] 
    possum.image = params[:image] 
    possum.save #can determine whether it's an update or insert

    redirect to ("/possums/#{ possum.id }") # GET request

end

#DELETE
get '/possums/:id/delete' do
    possum=Possum.find params[:id] 
    possum.destroy 
    redirect to ('/possums')
end

after do
    ActiveRecord::Base.connection.close
end