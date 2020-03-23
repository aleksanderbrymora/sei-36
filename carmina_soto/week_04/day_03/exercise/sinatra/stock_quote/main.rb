require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'

StockQuote::Stock.new(:api_key => 'pk_16a849fd637243a79fff90fa4d42bc5d')

get '/' do
  erb :home
end

get '/result' do
  @stock = params[:stock].upcase
  begin
    @result = StockQuote::Stock.quote @stock
  rescue
    puts "Symbol not found: #{@stock}"
    redirect to('/')
  end
  puts "Some string here"
  erb :result
end
