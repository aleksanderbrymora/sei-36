# ## Trip Calculator
# Calculate a trip time and cost given inputs for
# - distance
# - miles per gallon
# - price per gallon
# - speed in miles per hour
#

print "How many miles away is it?: "
distance = gets.chomp.to_i
print "How manys miles does it take per gallon?:"
miles = gets.chomp.to_i
print "How much is it per gallon"
gallon = gets.chomp.to_i
print "How fast are you going ?: "
speed = gets.chomp.to_i


print "it will take #{ distance / speed } and cost #{ miles * gallon}"
