require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

# StockQuote::Stock.new(:api_key => 'pk_16a849fd637243a79fff90fa4d42bc5d')



get '/' do
    erb :home   # Embedded Ruby
end

get '/' do
    erb :buy   # Embedded Ruby
end

get '/buy' do

    @quantity = params[:quantity].to_i
    @buy = @quantity * @book_price

    erb :buy

end

get '/result' do

    @title = params[:title]
       
    begin

        @book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@title}"
        @book_info = HTTParty.get @book_url
        
        @book_cover_image = @book_info["items"].first["volumeInfo"]["imageLinks"]["thumbnail"]
        @book_for_sale_link = @book_info["items"].first["saleInfo"]["buyLink"]
        @book_price_currency = @book_info["items"].first["saleInfo"]["retailPrice"]["currencyCode"]
        @book_price = @book_info["items"].first["saleInfo"]["retailPrice"]["amount"]
        
    rescue
        puts "Title not found: #{@title}"
        redirect to('/')
    end
        


    erb :result
end





