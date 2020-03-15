require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'
StockQuote::Stock.new(:api_key => 'pk_16a849fd637243a79fff90fa4d42bc5d')

# convention over configuration

get '/' do
  erb :home # embedded ruby
end

get '/faq' do
  erb :faq
end

get '/result' do

  @x = params[:x].upcase
 #the instance variable
 begin
  @results =  StockQuote::Stock.quote @x
rescue
  redirect to ('/')
end
  @result = @results.latest_price
  #"the result is #{result}"
    erb :result
end
