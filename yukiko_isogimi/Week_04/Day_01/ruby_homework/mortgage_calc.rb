# # Bonus
# ## Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)
#


print "How much is your property?: "
price = gets.chomp.to_i
print "How many years do you need to pay up?: "
length = gets.chomp.to_i * 12
print "What is the annual interest?: "
interest = gets.chomp.to_i / 12

mortage = (price / length) + interest

print "Your monthly mortgage is #{ mortage }"
