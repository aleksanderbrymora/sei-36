require 'pry'
puts "Mortgage Calculator"
print "Enter Principal Amount: "
principal = gets.to_i
print "Enter Monthly Interest Rate: "
rate = gets.to_f
print "Number of Payments [in Months]: "
payments = gets.to_i

def getInterest (number)
  (number / 100) / 12
end

def computeMortgage (principal_amt, rate, payments)
  get_monthly_interest_rate = getInterest(rate)
  get_rate = ( 1 + get_monthly_interest_rate ) ** payments
  monthly = (get_monthly_interest_rate * (get_rate)) / ((get_rate) - 1)
  monthly = principal_amt * monthly
end

monthlyPayment = computeMortgage principal, rate, payments
monthlyPayment = monthlyPayment.ceil 2;
puts "Your monthly payment is #{monthlyPayment}"
