require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :home
end

get '/result' do
  @book_title = params[:book_title]
  @book_author = params[:book_author]
  begin
    @book_url = "https://www.googleapis.com/books/v1/volumes?q=#{@book_title} #{@book_author}"
    @book_info = HTTParty.get @book_url
    # @book_cover = @book_info["items"].first["volumeInfo"]["imageLinks"]["thumbnail"]
  rescue
    puts "Book not found: #{@book_title}"
    redirect to('/')
  end
  puts "Some string here"
  erb :result
end
