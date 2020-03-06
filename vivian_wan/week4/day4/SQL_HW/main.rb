require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'


#HOME
get '/' do 
    erb :home
end

#INDEX
get '/chinchillas' do 
    @chinchillas = query_db 'SELECT * FROM chinchillas'
    erb :chinchillas_index
end

#NEW
get '/chinchillas/new' do
    erb :chinchillas_new
end

#SHOW
get '/chinchillas/:id' do
        @chinchin = query_db "SELECT * FROM chinchillas WHERE id=#{ params[:id] }" #array
        @chinchin = @chinchin.first 
        erb :chinchillas_show
end    


#CREATE
post '/chinchillas' do 
    query_db "INSERT INTO chinchillas (name, owner, year_born, image) VALUES ('#{ params[:petname] }', '#{ params[:ownername] }', '#{ params[:year_born] }', '#{ params[:image] }')"
    redirect to('/chinchillas')
end

#EDIT
get '/chinchillas/:id/edit' do
    @chinchin = query_db "SELECT * FROM chinchillas WHERE id=#{ params[:id] }" #array
    @chinchin = @chinchin.first
    erb :chinchillas_edit
end

#UPDATE
post '/chinchillas/:id' do
    # SQL UPDATE statement
    query_db "UPDATE chinchillas SET name='#{ params[:petname] }', owner='#{ params[:ownername] }', year_born='#{ params[:year_born] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
    redirect to ("/chinchillas/#{ params[:id] }") # GET request

end

#DELETE
get '/chinchillas/:id/delete' do
    query_db "DELETE FROM chinchillas WHERE id=#{ params[:id] }"
    redirect to ('/chinchillas')
end

def query_db(sql_statement)
    puts sql_statement # Optional but nice for debugging.
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results # Implicitly return
  end

