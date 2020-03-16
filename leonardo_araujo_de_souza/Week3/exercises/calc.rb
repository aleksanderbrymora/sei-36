  	 	

def askSecondNumber()
  print "First number: "
  num1 = gets.to_f
  print "Second number: "
  num2 = gets.to_f
  return num1, num2
end

def addition()
  num1, num2 = askSecondNumber()
  puts "Result: #{num1} + #{num2} = #{num1 + num2}"
end

def bmi()
  print "What is your weight(kg): "
  weight = gets.to_f
  print "What is your height(cm): "
  height = gets.to_f
  bmi_result = weight / (height * height)
  puts "Result: #{bmi_result}"
end

def division()
  num1, num2 = askSecondNumber()
  puts "Result: #{num1} / #{num2} = #{num1 / num2}"
end

def exponent()
  num1, num2 = askSecondNumber()
  puts "Result: #{num1} ** #{num2} = #{num1 ** num2}"
end

def modulus()
  num1, num2 = askSecondNumber()
  puts "Result: #{num1} % #{num2} = #{num1 % num2}"
end

def mortgage()
  print "What is the principal ($): "
  p = gets.to_i
  print "What is the annual interest rate (%): "
  rate_annual = gets.to_f
  print "What is the duration of the mortgage (years): "
  num_payments_annual = gets.to_i

  r = (rate_annual / 100) / 12
  n = num_payments_annual * 12

  top_equation = r * ((1 + r) ** n)
  bottom_equation = ((1 + r) ** n) - 1

  monthly_payment = (p) * (top_equation / bottom_equation)
  puts "Result: your monthly repayment is $#{monthly_payment.round(2)}"
end

def square_root()
  num = askFirstNumber()
  puts "Result: square root of #{num} = #{Math.sqrt(num)}"
end

def subtraction()
  num1, num2 = askSecondNumber()
  puts "Result: #{num1} - #{num2} = #{num1 - num2}"
end

def trip()
  print "How far will you be traveling (km): "
  d = gets.to_i
  print "How many km's can you drive on a litre (km): "
  km_per_litre = gets.to_i
  print "What is the price of fuel per litre ($): "
  p_per_liter = gets.to_f
  print "How fast will you be driving... (km/h): "
  s = gets.to_i

  time = d / s
  cost = (d / km_per_litre) * p_per_liter
  puts "Result: it will take #{time} hours and cost $#{cost}"
end

def multiplication()
  num1, num2 = askSecondNumber()
  puts "Result: #{num1} * #{num2} = #{num1 * num2}"
end



# binding.pry # debugger

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice
  when 'a'
    addition()
  when 'bmi'
    bmi()
  when 'd'
    division()
  when 'e'
    exponent()
  when 'm'
    modulus()
  when 'mp'
    mortgage()
  when 'r'
    square_root()
  when 's'
    subtraction()
  when 't'
    trip()
  when 'x'
    multiplication()
  else
    puts 'Invalid selection.'
  end
  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using this 'calculator'..."
