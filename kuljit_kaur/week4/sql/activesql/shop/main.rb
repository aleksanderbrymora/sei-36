require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

# Rails sets this up for you automatically
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)
