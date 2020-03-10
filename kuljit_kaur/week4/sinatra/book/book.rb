require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'

get '/' do
  erb :home # Embedded Ruby
end

get '/submit' do
  @title = params[:x].capitalize
  begin

  @book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@title}"
  @book_info = HTTParty.get@book_url
  rescue   #If @info is empty
    redirect to('/')
  end
  erb :submit
end
