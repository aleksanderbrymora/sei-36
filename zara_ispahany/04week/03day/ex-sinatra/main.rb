require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'

get '/' do
  erb :home
end

get '/result' do
  StockQuote::Stock.new(:api_key => 'pk_16a849fd637243a79fff90fa4d42bc5d')
  @stock_name = params[:stocks]
  begin
    @result =  StockQuote::Stock.quote @stock_name
  rescue
    redirect to('/')
  end

  erb :result
end
