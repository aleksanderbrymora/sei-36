require 'sinatra'#dsl
require 'sinatra/reloader'
require "sinatra/json"
require 'httparty'

# lens
require 'xf'

# routes
get "/" do
    erb :home #embeded ruby 
end

#lenses
# people = [{name: "Robert", "age": 22}, {name: "Roberta", "age": 22}, {name: "Foo", "age": 42}, {name: "Bar", age: 18}]

# people.map(&Xf.scope(:age).get) # => [22, 22, 42, 18]

#require httparty
#@bookurl ="bookslink#{usr_input}"
#@book_info = "HTTParty.get @book"
#@book_info["items"].first["volumeInfo"]["imageLinks"]["thumbnail"]

#routes
get "/result" do
    begin
        @book = params[:bookname]
        @book_info = HTTParty.get "https://www.googleapis.com/books/v1/volumes?q=title:#{@book}"
    rescue

    end
    @cover_url = @book_info["items"].first["volumeInfo"]["imageLinks"]["thumbnail"]
    json :result => @cover_url #embeded ruby 
end
