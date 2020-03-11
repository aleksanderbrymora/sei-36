
Beach.destroy_all

Beach.create :name => 'Boracay', :location => "Aklan", :area => 10.32
Beach.create :name => 'Nacpan Beach', :location => "El Nido", :area => 20.2
Beach.create :name => 'Malapascua Island', :location => "Cebu", :area =>6.8

puts "#{Beach.count} beaches available"
