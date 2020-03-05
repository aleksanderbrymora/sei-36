[17] pry(main)> history
 1: require 'httparty'
 2: history
 3: @title = "Jaws"
 4: @book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @title }"
 5: @book_info = HTTParty.get @book_url;
 6: @book_info.class
 7: @book_info.keys
 8: @book_info[:items].keys
 9: @book_info[:items]
10: @book_info["items"]
11: @book_info["items"].first
12: @book_info["items"].first.keys
13: @book_info["items"].first["volumeInfo"].keys
14: @book_info["items"].first["volumeInfo"]["imageLinks"]
15: @book_info["items"].first["volumeInfo"]["imageLinks"].keys
16: @book_info["items"].first["volumeInfo"]["imageLinks"]["thumbnail"]


# Books I

## Specification

Build a search form that lets the user enter a book title. The Sinatra app will use HTTParty to fetch the data for the chosen book from Google Books and display it on the page. Display the cover, as a bare minimum.

## Sample URL

https://www.googleapis.com/books/v1/volumes?q=title:Ulysses

### Additional Resources

- [Dynamic URLs in Sinatra](http://blog.teamtreehouse.com/ruby-sinatra-dynamic-urls-tutorial)
- [Google Books Search API](https://developers.google.com/books/docs/v1/reference/volumes/list)
- [HTTParty Tutorial](http://blog.teamtreehouse.com/its-time-to-httparty)
