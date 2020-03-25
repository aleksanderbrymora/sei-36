puts "Enter the Amount to be borrowed from the bank"
principle = gets.to_f
puts "Enter the repayment period in months"
noofmonths = gets.to_f
puts "Enter the rate of interest for the home loan"
interest = gets.to_f
monthlyrepayment = principle * (((interest/100) * ((1 + (interest/100)) ** noofmonths) ) / (((1 + (interest/100)) ** noofmonths) - 1))
puts "your monthly repayment will be #{monthlyrepayment}"
