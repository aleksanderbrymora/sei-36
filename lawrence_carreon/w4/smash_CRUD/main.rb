require "sinatra"
require "sinatra/reloader"
require "sqlite3"
require "pry"

def connect_db sql_command
    puts sql_command
    database = SQLite3::Database.new "database.sqlite3"
    database.results_as_hash = true
    results = database.execute sql_command
    database.close
    results
end

# home
get "/" do
    erb :home
end

# create
get "/fighters/new" do
    erb :fighters_new
end

post "/fighters" do
    connect_db "INSERT INTO fighters (name, franchise, in_game, stock_image, image) VALUES ('#{params[:name]}','#{params[:franchise]}','#{params[:in_game]}', '#{params[:stock_image]}', '#{params[:image]}')"
    redirect to "/fighters"
end

# read
get "/fighters" do
    @fighters = connect_db "SELECT * FROM fighters;"
    erb :fighters_index
end

get "/fighters/:id" do
    @fighter = connect_db "SELECT * FROM fighters WHERE id=#{params[:id]};"
    @fighter = @fighter.first
    erb :fighters_show
end

# update
get "/fighters/:id/edit" do
    @fighter = connect_db "SELECT * FROM fighters WHERE id=#{ params[:id] }"
    @fighter = @fighter.first
    erb :fighters_edit
end

post "/fighters/:id" do
    connect_db "UPDATE fighters SET name='#{params[:name]}', franchise='#{params[:franchise]}', in_game='#{params[:in_game]}', stock_image='#{params[:stock_image]}', image='#{params[:image]}' WHERE id=#{params[:id]}"
    redirect to "/fighters/#{params[:id]}"
end

# delete
get "/fighters/:id/delete" do
    connect_db "DELETE FROM fighters WHERE id=#{params[:id]}"
    redirect to "/fighters"
end

#search
post "/fighters/bio/search" do 
    fighter = connect_db "SELECT * FROM fighters WHERE name='#{params[:name].downcase.split(" ").map{ |word| word.capitalize}.join(" ")}'"
    unless fighter.size == 0
        fighter = fighter.first
        redirect to "/fighters/#{fighter["id"]}"
    else
        redirect to "/"
    end
end