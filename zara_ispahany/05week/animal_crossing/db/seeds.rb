Animal.destroy_all

Animal.create(:name => 'Bob', :personality => 'lazy', :image => 'https://vignette.wikia.nocookie.net/animalcrossing/images/7/7a/-Bob_-_Animal_Crossing_New_Leaf.png/revision/latest?cb=20170102120317')
Animal.create(:name => 'Canberra', :personality => 'Uchi', :image => 'https://vignette.wikia.nocookie.net/animalcrossing/images/4/46/Canberra_HHD.png/revision/latest?cb=20160624002709')

puts "#{ Animal.count } villagers created."
