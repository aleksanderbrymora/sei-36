# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Video.destroy_all

Video.create title: "Titanic", date: "1997-01-01", director: "James Cameron", image: "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg"

Video.create title: "The Sound of Music", date: "1965-01-01", director: "Robert Wise", image: "https://m.media-amazon.com/images/M/MV5BODIxNjhkYjEtYzUyMi00YTNjLWE1YjktNjAyY2I2MWNkNmNmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"

Video.create title: "Cape Fear", date: "1991-01-01", director: "Martin Scorsese", image: "https://m.media-amazon.com/images/M/MV5BNjdhNzZlYzYtYTBlNS00NTJiLWI2ZWUtMDI2YzI2MzM5NjY4XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg"
