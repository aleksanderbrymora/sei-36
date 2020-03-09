require 'sinatra'
require 'sinatra/reloader'



#Convetion over configuration


get '/' do
  erb :home
end

get '/yes1' do
  erb :yes1
end

get '/yes2' do
  erb :yes2
end

get '/yes3' do
  erb :yes3
end

get '/no1' do
  erb :no1
end

get '/no2' do
  erb :no2
end
