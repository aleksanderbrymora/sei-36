# # Calculator
#
# ### Explanation
# - You will be building a calculator.  A calculator can perform multiple arithmetic operations.  Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
#
# ### Specification:
# - A user should be given a menu of operations
# - A user should be able to choose from the menu
# - A user should be able to enter numbers to perform the operation on
# - A user should be shown the result
# - This process should continue until the user selects a quit option from the menu
#
# #### Phase 1
# - Calculator functionality
# - Calculator should be able to do basic arithmetic (+,-, *, /)
#

#
#
#
# # Bonus
# ## Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)
#
# ## BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight
#
# ## Trip Calculator
# Calculate a trip time and cost given inputs for
# - distance
# - miles per gallon
# - price per gallon
# - speed in miles per hour

puts "ENTER FIRST NUMBER : "
num1 = gets.chomp().to_f
puts " ENTER OPERATOR: "
op = gets.chomp()
puts "ENTER SENCOND NUMBER: "
num2 = gets.chomp().to_f

if op == "+"
  puts ( num1 + num2)
elsif op =="-"
  puts ( num1 - num2)
elsif op =="/"
  puts ( num1 / num2)
elsif op =="*"
  puts ( num1 * num2)

else
  puts "invalid number"
end
