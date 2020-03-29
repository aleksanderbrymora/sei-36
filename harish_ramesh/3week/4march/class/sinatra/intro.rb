require "sinatra" #DSL DOMAIN SPECIFIC LANGUAGE
require "sinatra/reloader" # sinatra-contrib
get '/helo' do
  "hello worls from sinatra"
end


get '/goodbye' do
  "Good bye from sinatra"
end


#dynamic

get '/lucky number' do
  "here is your lucky no. #{rand 1..40}"
end

get '/uptime' do
  "the server uptime is #{`uptime`}" #using `` backticks for ruby to run that command in command line
end

get '/fanclub/:name' do
  "#{params[:name]}is a proud member of sunny leone fan club" # can use "name" or :name as its sinatra indifferent hash
end

get '/fanclub/:first/:last' do
  "#{params[:first].capitalize} #{params[:last].upcase} is a premium member of sunny club. "
end

# CALCULATOR

get 'multiply/:x/:y' do
  result = params[:x].to_f * params[:y].to_f
  "the result is #{result}"
end

#CONCERNS
#where is HTML
# how to get user input without writing it in the URL
