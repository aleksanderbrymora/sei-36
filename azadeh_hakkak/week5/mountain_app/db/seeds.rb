# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Mountain.destroy_all

Mountain.create :name => 'Everest', :elevation => 29.035, :location => 'Nepal\/Tibet', :first_ascent => '29 May 1953'
Mountain.create :name => 'K2', :elevation => 28.250, :location => 'Pakistan\/China', :first_ascent => '31 July 1954'
Mountain.create :name => 'Kangchenjunga', :elevation => 28.169, :location => 'India\/Nepal', :first_ascent => '25 May 1955'

puts "#{ Mountain.count } mountains available."
