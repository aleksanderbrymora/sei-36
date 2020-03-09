require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
<<<<<<< HEAD
require 'active_record'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

#Model: class + database table
class Team < ActiveRecord::Base
  has_many :drivers
end

class Driver < ActiveRecord::Base
  belongs_to :team
end

=======
>>>>>>> 71e4864be61bfaaccdcacf39c18a15b67c88453c

get '/' do
  erb :home
end

get '/drivers' do
<<<<<<< HEAD
  @drivers = Driver.all
=======
  @drivers = query_db "SELECT * FROM drivers"
>>>>>>> 71e4864be61bfaaccdcacf39c18a15b67c88453c
  erb :drivers_index
end

get '/drivers/new' do
  erb :drivers_new
end

post '/drivers' do
<<<<<<< HEAD
    driver = Driver.new
    driver.name = params[:name]
    driver.team = params[:team]
    driver.podiums = params[:podiums]
    driver.image = params[:image]
    driver.save
=======
    query_db "INSERT INTO drivers (name, team, podiums, image) VALUES ('#{params[:name]}', '#{params[:team]}', '#{params[:podiums]}', '#{params[:image]}')"
>>>>>>> 71e4864be61bfaaccdcacf39c18a15b67c88453c
    redirect to('/drivers')
end

get '/drivers/:id' do
<<<<<<< HEAD
  @driver = Driver.find params[:id]
=======
  @driver = query_db "SELECT * FROM drivers WHERE id='#{params[:id]}'"
  @driver = @driver.first
  @team = query_db_team "SELECT * FROM teams WHERE name='#{@driver["team"]}'"
  @team = @team.first
>>>>>>> 71e4864be61bfaaccdcacf39c18a15b67c88453c
  erb :drivers_show
end

get '/drivers/:id/edit' do
<<<<<<< HEAD
  @driver = Driver.find params[:id]
  erb :drivers_edit
end

post '/drivers/:id' do
  driver = Driver.find params[:id]
  driver.name = params[:name]
  driver.team = params[:team]
  driver.podiums = params[:podiums]
  driver.image = params[:image]
  driver.save
  redirect to("/drivers/#{params[:id]}")
end

get '/drivers/:id/delete' do
  driver = Driver.find params[:id]
  driver.destroy
  redirect to ('/drivers')
end

get '/teams' do
  @teams = Team.all
=======
  @driver = query_db "SELECT * FROM drivers WHERE id='#{params[:id]}'"
  @driver = @driver.first
  erb :drivers_edit
end

get '/drivers/:id/delete' do
  query_db "DELETE FROM drivers WHERE id='#{params[:id]}'"
  redirect to ('/drivers')
end

post '/drivers/:id' do
  query_db "UPDATE drivers SET name='#{params[:name]}', team='#{params[:team]}', podiums='#{params[:podiums]}', image='#{params[:image]}' WHERE id='#{params[:id]}'"
  redirect to("/drivers/#{params[:id]}")
end

get '/teams' do
  @teams = query_db_team "SELECT * FROM teams"
>>>>>>> 71e4864be61bfaaccdcacf39c18a15b67c88453c
  erb :teams_index
end

get '/teams/:id' do
<<<<<<< HEAD
    @team = Team.find params[:id]
    erb :teams_show
end

after do
  ActiveRecord::Base.connection.close
=======
    @team = query_db_team "SELECT * FROM teams WHERE id='#{params[:id]}'"
    @team = @team.first
    @drivers = query_db "SELECT * FROM drivers WHERE team='#{@team["name"]}'"
    erb :teams_show
end


def query_db(sql_statement)
  puts sql_statement #Optional but nice for debugging
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results #implicitly return
end

def query_db_team (sql_statement)
  puts sql_statement #Optional but nice for debugging
  db = SQLite3::Database.new 'database2.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results #implicitly return
>>>>>>> 71e4864be61bfaaccdcacf39c18a15b67c88453c
end
