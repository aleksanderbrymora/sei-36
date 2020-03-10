require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :home
end

get '/result' do
  @book_title = params[:book_title]
  @book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @book_title }"
  @book_info = HTTParty.get @book_url
  @book_heading = @book_info["items"].first["volumeInfo"]["title"]
  @book_pic = @book_info["items"].first["volumeInfo"]["imageLinks"]["thumbnail"]

  erb :result
end
