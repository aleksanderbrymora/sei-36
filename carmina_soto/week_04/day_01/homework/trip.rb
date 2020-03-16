puts "Trip Calculator"
print "Enter distance (mi): "
distance = gets.to_i
print "Enter speed (mph): "
speed = gets.to_i
print "Enter consumption (mpg): "
mi_per_gl = gets.to_i
print "Enter price per gallon (ppg): "
price_per_gl = gets.to_i

time = distance / speed
cost = (distance / mi_per_gl) * price_per_gl

puts "The trip will take #{time} hours and will cost $#{cost}."
