require "sinatra"
require "sinatra/reloader"
require "httparty"
#convention over configuration


get '/' do
  erb :home
end

get '/faq' do
  erb :faq
end

get '/result' do
  @book_title = params[:title]
  @book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@book_title}"
  @book_info = HTTParty.get@book_url
  @cover_img = @book_info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  @author_info = @book_info["items"][0]["volumeInfo"]["authors"][0]
  @publisher_info = @book_info["items"][0]["volumeInfo"]["publisher"][0]
  @language = @book_info["items"][0]["volumeInfo"]["language"][0]
  erb :result
end
