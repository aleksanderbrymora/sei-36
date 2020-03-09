require 'sinatra'
require 'sinatra/reloader'

require 'httparty'


#Convetion over configuration


get '/' do
  erb :home
end

get '/result' do

  @book_title= params[:book_title].upcase
  @book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @book_title}"
  @book_info = HTTParty.get @book_url

  erb :result
end
