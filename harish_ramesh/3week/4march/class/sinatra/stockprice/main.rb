require "sinatra"
require "sinatra/reloader"
require "stock_quote"
StockQuote::Stock.new(:api_key => 'pk_16a849fd637243a79fff90fa4d42bc5d')
#convention over configuration


get '/' do
  erb :home
end

get '/faq' do
  erb :faq
end

get '/result' do
  @stock_symbol = params[:stock_symbol]
  @result = StockQuote::Stock.quote @stock_symbol
  @result = @result.latest_price
  erb :result
end
