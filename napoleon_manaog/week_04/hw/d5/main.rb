require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

require 'pry'

# Rails sets this up for you automatically
ActiveRecord::Base.establish_connection(
  :adapter  => 'sqlite3',
  :database => 'bmw.sqlite3'
)

# Optional Bonus
ActiveRecord::Base.logger = Logger.new(STDERR)

# Model: class + a database table
class Bmw < ActiveRecord::Base
  belongs_to :family, :optional => true
end

# Model: series
# class series < ActiveRecord::Base
#
# end
 # TODO: Change Family to Generation for technical correctness
class Family < ActiveRecord::Base
	has_many :bmws
end


get '/' do
 erb :home
end

# INDEX
get '/bmws' do
  @bmws = Bmw.all
  erb :bmw_index
end

# NEW
get '/bmw/new' do
  erb :bmw_new
end

# CREATE
post '/bmw' do
  # @bmw = query_db("INSERT INTO bmws (family, model,year,image) VALUES ('#{params[:family]}','#{params[:model]}','#{params[:year]}','#{params[:image]}');")
  bmw = Bmw.new
  bmw.family_id = params[:family_id]
  bmw.model  = params[:model]
  bmw.year   = params[:year]
  bmw.image  = params[:image]
  bmw.save
  redirect to("/bmw/#{bmw.id}")
end

# SHOW
get '/bmw/:id' do
  # connect to db
  # fetch the BMW based on id
  @bmw = Bmw.find params[:id]
  erb :bmw_show
end

# EDIT
get '/bmw/:id/edit' do
  @bmw = Bmw.find params[:id]
  erb :bmw_edit
end

# UPDATE
post '/bmw/:id' do
  bmw = Bmw.find params[:id]
  bmw.family_id = params[:family_id]
  bmw.model  = params[:model]
  bmw.year   = params[:year]
  bmw.image  = params[:image]
  bmw.save
  redirect to("/bmw/#{params[:id]}")
end

# DELETE
get '/bmw/:id/delete' do
  # query_db("DELETE FROM bmws WHERE id=#{params[:id]}")
  bmw = Bmw.find params[:id]
  bmw.destroy
  redirect to('/bmws')
end

#------------------------
# GENERATION  -----------
#------------------------

# INDEX
get '/families' do
  @families = Family.all
  erb :families_index
end

# NEW
get '/family/new' do
  erb :family_new
end

# CREATE
post '/family' do
  family = Family.new
  family.name = params[:name]
  family.save
  redirect to("/family/#{family.id}")
end

# SHOW
get '/family/:id' do
  @family = Family.find params[:id]
  erb :family_show
end

# EDIT
get '/family/:id/edit' do
  @family = Family.find params[:id]
  erb :family_edit
end

# UPDATE
post '/family/:id' do
  family = Family.find params[:id]
  family.name = params[:name]
  family.save
  redirect to("/family/#{family.id}")
end

# DELETE
get '/family/:id/delete' do
  family = Family.find params[:id]
  family.destroy
  redirect to('/families')
end
