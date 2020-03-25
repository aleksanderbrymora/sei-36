Animal.destroy_all # clear

Animal.create :name => 'Koala', :family => 'Phascolarctidae'
Animal.create :name => 'Kangaroo', :family => 'Macropodidae'

puts "#{ Animal.count } available."