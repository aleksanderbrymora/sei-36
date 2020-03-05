require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'digest/sha2'

get '/' do
  erb :home
end

post '/home' do
    @user = query_db "SELECT * FROM users WHERE username=#{ params[:username] }" # Array
    @user = @user.first
    
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
    digestor = Digest::SHA256.new
    input = digestor.digest(salt + password)
  
    1000.times.inject(input) do |reply|
      digestor.digest(reply)
    end
end

def query_db(sql_statement)
    puts sql_statement # Optional but nice for debugging.
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results # Implicitly return
end