Singer.destroy_all 

Singer.create :name => 'Janet Jackson', :title => 'Together Again', :year_release => 2000, :fans => 65
Singer.create :name => 'Bruno Mars', :title => 'Just the way you are', :year_release => 2018, :fans => 5660
Singer.create :name => 'Backstreet Boys', :title => 'I want it this way', :year_release => 2011, :fans => 567896
Singer.create :name => 'Westlife', :title => 'Train', :year_release => 1988, :fans => 1000
Singer.create :name => 'Prince', :title => 'Purple rain', :year_release => 2005, :fans => 400
Singer.create :name => 'Mitchell Browne', :title => 'Dancing queen', :year_release => 1999, :fans => 255

puts "#{ Singer.count } singers available."
