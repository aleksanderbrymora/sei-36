require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'


# @book_title = ""

get '/' do
	erb :home

end

get "/results" do
	 @book_title = params[:book_title]
	 @author = params[:authors[0]]
	 title_result = HTTParty.get "https://www.googleapis.com/books/v1/volumes?q=#{@book_title}"
	 erb :result
end
