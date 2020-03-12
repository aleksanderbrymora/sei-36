require 'sinatra'
require 'sinatra/reloader'

require 'httparty'



get '/' do
	erb :home
end

get '/result' do
	require 'pry'
	@title = params[:book_title].downcase
	begin # try
    @book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@title}"
    @book_info = HTTParty.get @book_url
    # binding.pry
	rescue # catch
		puts "Book not found : #{@book_title} "
		redirect to('/')
	end
	erb :result
end
