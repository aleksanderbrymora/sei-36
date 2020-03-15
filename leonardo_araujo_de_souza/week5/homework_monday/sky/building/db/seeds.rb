
Building.destroy_all

Building.create :name => 'Burj Khalifa', :meters => 365.25, :country => 1
Building.create :name => 'Shanhai Tower', :meters => 283, :country => 0
Building.create :name => 'Makkah Clock Tower', :meters => 511, :country => 6

puts "#{ Building.count } Buildings available."
