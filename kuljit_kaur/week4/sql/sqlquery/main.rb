require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'


# def set_operation
#   @path = request.path_info
#   if '/flowers/Add'
#     @operation = 'Add'
#     @flower["name"] = ''
#     @flower["sun_needs"] = ''
#     @flower["soil_needs"] = ''
#     @flower["bloom_in"] = ''
#     @flower["image"] = ''
#   elsif '/flowers/:id/update'
#     @operation = 'Update'
#     @flower = query_db "SELECT * FROM flowers WHERE id=#{ params[:id] }"
#     @flower = @flower.first
#     puts @flower
#   end
# end

get '/' do
  erb :home
end

# INDEX (get all flowers)
get '/flowers' do
  @flowers = query_db 'SELECT * FROM flowers'
  erb :show
end

# NEW Create a new flower
get '/flowers/Add' do
  # set_operation
  erb :create
  # erb :common_form
end

# CREATE Add a new flower
post '/flowers' do
  query_db "INSERT INTO flowers (name,sun_needs,soil_needs,bloom_in,image) VALUES ('#{ params[:name] }', '#{ params[:sun_needs] }', '#{ params[:soil_needs] }','#{ params[:bloom_in] }','#{ params[:image] }')"
  redirect to('/flowers')
end

# SHOW each flower
get '/flowers/:id' do
  @flower = query_db "SELECT * FROM flowers WHERE id=#{ params[:id] }" # Array
  @flower = @flower.first
  erb :show_flower
end

# Update the flower details
get '/flowers/:id/update' do
  # puts "#{params}"
  @flower = query_db "SELECT * FROM flowers WHERE id=#{ params[:id] }"
  @flower = @flower.first
  # set_operation
  erb :update
  # erb :common_form
end

# UPDATE
post '/flowers/:id' do
  query_db "UPDATE flowers SET name ='#{ params[:name]}',sun_needs = '#{ params[:sun_needs]}', soil_needs = '#{ params[:soil_needs]}',bloom_in = '#{ params[:bloom_in]}',image = '#{ params[:image]}' WHERE id=#{ params[:id] }"
  redirect to("/flowers")
end

# Delete
get '/flowers/:id/delete' do
  query_db "DELETE FROM flowers WHERE id=#{ params[:id] }"
  redirect to('/flowers')
end

def query_db(sql_statement)
  puts sql_statement # Optional but nice for debugging.
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results # Implicitly return
end
