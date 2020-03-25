class BooksController < ApplicationController
  def books
    @bookname = params[:book_name]
 #the instance variable
  @bookurl =  "https://www.googleapis.com/books/v1/volumes?q=title:#{@bookname}"
  @bookinfo = HTTParty.get@bookurl
  @bookimage = @bookinfo["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    render :books
end
end
