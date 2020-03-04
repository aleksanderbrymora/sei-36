# require 'sinatra'#dsl
# require 'sinatra/reloader'
# require 'httparty'

require 'xf'

#routes
# get "/" do
#     erb :home #embeded ruby 
# end

#lenses
people = [{name: "Robert", age: 22}, {name: "Roberta", age: 22}, {name: "Foo", age: 42}, {name: "Bar", age: 18}]

people.map(&Xf.scope(:age).get) # => [22, 22, 42, 18]

#require httparty
#@bookurl ="bookslink#{usr_input}"
#@book_info = "HTTParty.get @book"
#@book_info["items"].first["volumeInfo"]["imageLinks"]["thumbnail"]