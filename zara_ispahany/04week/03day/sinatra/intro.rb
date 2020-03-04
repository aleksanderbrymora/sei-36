require 'sinatra' # DSL: Domain Specific Language

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
