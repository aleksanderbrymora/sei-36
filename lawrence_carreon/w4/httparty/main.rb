require "sinatra"
require "sinatra/reloader"
require "httparty"
require "pry"

get "/" do
    erb :home
end

get "/results" do
    @search = params[:user_search].downcase
    @book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@search}"
    @search_info = HTTParty.get @book_url
    erb :results
end

get "/book/:book_id" do
    @book_id = params[:book_id]
    @book_url = "https://www.googleapis.com/books/v1/volumes/#{@book_id}"
    @book_info = HTTParty.get @book_url
    erb :single_book
end