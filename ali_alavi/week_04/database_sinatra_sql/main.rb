require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'digest/sha2'
require 'pry'

get '/' do
#   binding.pry
  erb :home
end

post '/' do
    @user = query_db "SELECT * FROM users WHERE username='#{ params[:username] }'" # Array
    @user = @user.first
    puts "#{compute_hash(params[:password])}, #{@user["password"]}"
    if @user["password"] == compute_hash(params[:password])
        redirect to("/welcome") # GET request
    else
        redirect to("/")
    end
end

get '/welcome' do
    erb :welcome
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