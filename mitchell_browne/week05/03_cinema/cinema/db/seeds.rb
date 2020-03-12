Director.destroy_all

Director.create(:name => 'Quentin Tarantino', :nationality => 'American', :dob => '1963-03-27', :oscars => '2', :image => 'https://m.media-amazon.com/images/M/MV5BNGEzYjBiZmQtN2Y0OC00M2E2LTg1ZDQtYTcyYTE4NjJkMjgxXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX1777_CR0,0,1777,999_AL_.jpg')
Director.create(:name => 'Stanley Kubrick', :nationality => 'American', :dob => '1928-07-26', :oscars => '1', :image => 'https://m.media-amazon.com/images/M/MV5BYjBiZTNkYTItMDliMC00YWM5LThmOTYtZjg3ZWZlYWFiNzlmXkEyXkFqcGdeQXVyNTAyNDQ2NjI@._V1_.jpg')
Director.create(:name => 'George Miller', :nationality => 'Australian', :dob => '1945-3-3', :oscars => '1', :image => 'https://m.media-amazon.com/images/M/MV5BOWJmMGVhNDMtOTZlYi00NjhjLTk1NTctZTVjNWNmZmJjMDM4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg')

puts "#{Director.count} directors created"

Film.destroy_all

Film.create(:title => 'Pulp Fiction', :year => '1994', :rating => '8.9', :image => 'https://m.media-amazon.com/images/M/MV5BOTc4MTY2NjM5NF5BMl5BanBnXkFtZTgwNjE4OTEwMjE@._V1_SY1000_CR0,0,1463,1000_AL_.jpg')
Film.create(:title => 'A Clockwork Orange', :year => '1971', :rating => '8.3', :image => 'https://m.media-amazon.com/images/M/MV5BMTYxNjQ5MDM5NF5BMl5BanBnXkFtZTcwMjE4NzMyNQ@@._V1_SX1492_CR0,0,1492,999_AL_.jpg')
Film.create(:title => 'Mad Max', :year => '1979', :rating => '6.9', :image => 'https://m.media-amazon.com/images/M/MV5BYmZkNDM0NmUtZTFkZS00ODBiLWJjNDMtNWM4MmMzYWQ1ZmI5XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_SY1000_CR0,0,1510,1000_AL_.jpg')

puts "#{Film.count} films created"
