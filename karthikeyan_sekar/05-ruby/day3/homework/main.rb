require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

# convention over configuration

get '/' do
  erb :home # embedded ruby
end

get '/faq' do
  erb :faq
end

get '/result' do

  @bookname = params[:book_name]
 #the instance variable
  @bookurl =  "https://www.googleapis.com/books/v1/volumes?q=title:#{@bookname}"
  @bookinfo = HTTParty.get@bookurl
  @bookimage = @bookinfo["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  @bookauth = @bookinfo["items"][0]["volumeInfo"]["authors"][0]
  @bookauths = @bookinfo["items"][0]["volumeInfo"]["authors"][1]
  #"the result is #{result}"
    erb :result
end
