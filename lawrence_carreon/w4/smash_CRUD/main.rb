require "sinatra"
require "sinatra/reloader"
require "sqlite3"
require "active_record"
require "pry"

# Active record connection
ActiveRecord::Base.establish_connection(
    :adapter => "sqlite3",
    :database => "database.sqlite3"
)

# SQL output
ActiveRecord::Base.logger = Logger.new(STDERR)

# Models
class Fighter < ActiveRecord::Base
end

class Special < ActiveRecord::Base
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
    fighter = Fighter.new
    fighter.name = params[:name]
    fighter.franchise = params[:franchise]
    fighter.in_game = params[:in_game]
    fighter.stock_image = params[:stock_image]
    fighter.image = params[:image]
    redirect to "/fighters"
end

# read
get "/fighters" do
    @fighters = Fighter.all
    erb :fighters_index
end

get "/fighters/:id" do
    @fighter = Fighter.find params[:id]
    erb :fighters_show
end

# update
get "/fighters/:id/edit" do
    @fighter = Fighter.find params[:id]
    erb :fighters_edit
end

post "/fighters/:id" do
    fighter = Fighter.find params[:id]
    fighter.name = params[:name]
    fighter.franchise = params[:franchise]
    fighter.in_game = params[:in_game]
    fighter.stock_image = params[:stock_image]
    fighter.image = params[:image]
    redirect to "/fighters/#{params[:id]}"
end

# delete
get "/fighters/:id/delete" do
    fighter = Fighter.find params[:id]
    fighter.destroy
    redirect to "/fighters"
end

############### SPECIAL MOVES #####################

# create
get "/specials/new" do
    erb :specials_new
end

post "/specials" do
    special = special.new
    special.name = params[:name]
    special.franchise = params[:franchise]
    special.in_game = params[:in_game]
    special.stock_image = params[:stock_image]
    special.image = params[:image]
    redirect to "/specials"
end

# read
get "/specials" do
    @specials = Special.all
    erb :specials_index
end

get "/specials/:id" do
    @special = Special.find params[:id]
    erb :specials_show
end

# update
get "/specials/:id/edit" do
    @special = Special.find params[:id]
    erb :specials_edit
end

post "/specials/:id" do
    special = Special.find params[:id]
    special.name = params[:name]
    special.franchise = params[:franchise]
    special.in_game = params[:in_game]
    special.stock_image = params[:stock_image]
    special.image = params[:image]
    redirect to "/specials/#{params[:id]}"
end

# delete
get "/specials/:id/delete" do
    special = Special.find params[:id]
    special.destroy
    redirect to "/specials"
end

# generic
# search
post "/fighters/bio/search" do 
    search_id = Fighter.where("name like?","%#{params[:name].downcase.capitalize}%").pluck(:id)
    unless search_id.size == 0
        search_id = search_id.first
        redirect to "/fighters/#{search_id}"
    else
        redirect to "/"
    end
end