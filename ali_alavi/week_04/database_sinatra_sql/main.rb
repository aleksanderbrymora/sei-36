require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'digest/sha2'
require 'pry'
require 'active_record'

#enable sessions
enable :sessions

# Rails sets this up for you automatically
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

# Model: class + a database table
class User < ActiveRecord::Base
end

get '/' do
#   binding.pry
  erb :home
end

get '/register' do
    #   binding.pry
      erb :register
end


post '/' do
    @user = User.find_by(username: params[:username])
    # puts "#{@user.username}"
    if @user.password == compute_hash(params[:password])
        session["user_id"] = @user.id
        redirect to("/blog") # GET request
    else
        redirect to("/")
    end
end

# CREATE
post '/register' do
    if params[:password1] == params[:password2]
        user = User.new
        user.username = params[:username]
        user.password = compute_hash(params[:password1])
        user.save
        redirect to("/") # Login page
    else
        puts "#{params[:password1]}"
        redirect to("/register") #failed
    end
end

get '/blog' do
    if session["user_id"] 
        erb:blog 
    else
        redirect to("/")
    end 
end

get '/logout' do
    session.clear
    redirect '/'
end

# to store/fetch passwords
def compute_hash(password)
        salt = 'f1nd1ngn3m0'
        input = Digest::SHA256.hexdigest (salt + password)
        input
end

def query_db(sql_statement)
    puts sql_statement # Optional but nice for debugging.
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results # Implicitly return
end