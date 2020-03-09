def show_menu
  puts "-=" * 40
  puts "\nMortgage Calculator"
  puts "-=" * 40
  puts "principal is loan amount "
  puts "rate is interest rate of loan"
  puts "term is duration of loan in years"
  puts "Enter the following values: principal rate term "
  puts "[q] - Quit"
  puts "Usage: 1000 5 10"
  print "Pls enter type selection as per usage: "
end

# p - primcipal r-interest rate term-duration of loan in years
# https://www.bankrate.com/calculators/mortgages/mortgage-calculator.aspx
def calc_monthly_mortgage(p,rate=0.0,term)
  r = (rate.to_f/100)/12
  n = 12*term
  monthly_payments = p *((r*(((1+r)**n)))/(((1+r)**n)-1)) ;
  puts "Monthly payment(s) (P=#{p} rate=#{rate} term=#{term}) = #{monthly_payments}"
end

input = [""]

until input[0] == 'q'

  if input.length == 3
    principal = input[0].to_f
    rate = input[1].to_i
    term = input[2].to_i
    calc_monthly_mortgage(principal,rate,term)
    input = [""]
  else
    show_menu
    input = gets.chomp.split(" ")
  end
end

puts "Thanks for using Simple Mortgage Calculator."
