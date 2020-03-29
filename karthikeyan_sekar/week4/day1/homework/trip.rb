puts "distance in miles"
distance = gets.to_f
puts "miles per gallon"
mileage = gets.to_f
puts "price per gallon"
price = gets.to_f
puts "speed in miles per hour"
speed = gets.to_f
puts "total trip time #{distance/speed}"
puts "cost of the trip is #{(distance * 6.058) / mileage }"
