require 'sinatra' # DSL: Domain Specific Language
require 'sinatra/reloader' #sinatra-contrib

get '/hello' do # don't write gets or the program will pause
  "Hello Word from Sinatra"
end

get '/goodbye' do
  "Goodbye cruel world from Sinatra"
end

# Dynamic
get '/lucky_number' do
  "Here is your lucky number: #{rand 1..40}"
end

get '/uptime' do
  "The server uptime is #{`uptime`}"
end

get '/fanclub/:name' do
  "#{params[:name].capitalize} is a proud member of the Marx Brothers fanclub."
end

get '/fanclub/:first/:last' do
  "#{params[:first].capitalize} #{params[:last].upcase} is a premium member of the Marx Brothers fanclub."
end

get '/fanclub/:first/:last/:favourite' do
  "#{params[:first].capitalize} #{params[:last].upcase} is a platinum member and their favourite brother is #{params[:favourite].upcase}."
end

# Second calculator
get '/multiply/:x/:y' do
  result = params[:x].to_f * params[:y].to_f
  "The result is #{result}"
end
