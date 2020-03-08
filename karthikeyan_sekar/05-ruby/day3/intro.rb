require 'sinatra' #DSL : domain specific language
require 'sinatra/reloader'

get '/hello' do
  "hello world from sinatra"
end

get '/goodbye' do
  "goodbye cruel world from sinatra"
end

# Dynamic

get '/lucky_number' do
  "here is your lucky number: #{rand 0..40}"
end

get '/uptime' do
  "The server uptime is #{`uptime`}"
end

get '/fanclub/marto' do
  "marto is a proud member of marx brothers"
end

get '/fanclub/:name' do #dynamic URL
  "#{ params[:name].capitalize} is a proud member of marx brothers fanclub"
end

get '/fanclub/:first/:last' do #dynamic URL
  "#{ params[:first].capitalize} #{ params[:last].upcase} is a proud member of marx brothers fanclub"
end

get '/fanclub/:first/:last/:favourite' do
  "#{ params[:first].capitalize} #{ params[:last].upcase} is a proud member of marx brothers fanclub and
   their favourite brother is #{ params[:favourite].upcase}"
end

get '/multiply/:x/:y' do
  result = params[:x].to_f * params[:y].to_f
  "The result is #{result}"
end
