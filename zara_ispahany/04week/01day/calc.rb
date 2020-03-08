require 'pry'
require 'rainbow'

def show_menu
  puts "-=" * 15
  puts "-=" * 15
  puts "Calculator".center(15) #TODO: you could use .center to make look nicer
  puts "-=" * 15 #budget horizontal dividing lines
  puts "[a] - Addition".center(27)
  puts "[s] - Subtraction".center(30)
  puts "[m] - Multiplication".center(32)
  puts "[d] - Division".center(27)
  puts "[sq] - Square Root".center(30)
  puts "[mt] - Mortgage Calculator".center(30)
  puts "-=" * 15
  puts "[q] - Quit".center(14)
  puts "-=" * 15

  print "Enter your choice: "
end

def addition(a, b)
  a.to_f + b.to_f
end

#binding.pry will pause at that line

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice
  when 'a'
    puts "Addition.."
    # Get first value
    print "Enter first value: "
    a = gets.chomp
    # Get second value
    print "Enter second value: "
    b = gets.chomp
    # Output the answer
    puts "**" * 15
    puts Rainbow("THE ANSWER IS: #{addition(a, b)}").magenta.bright
    puts "**" * 15

  when 's'
    puts "Subtraction.."
    # Get first value
    print "Enter first value: "
    sub1 = gets.to_i
    # Get second value
    print "Enter second value: "
    sub2 = gets.to_i
    # find sum
    sub_sum = sub1 - sub2
    # Output the answer
    puts "**" * 15
    puts Rainbow("THE ANSWER IS: #{sub_sum}").cyan.bright
    puts "**" * 15

  when 'm'
    # Get first value
    puts "Multiplication.."
    print "Enter first value: "
    mul1 = gets.to_i
    # Get second value
    print "Enter second value: "
    mul2 = gets.to_i
    # find sum
    mul_sum = mul1 * mul2
    # Output the answer
    puts "**" * 15
    puts Rainbow("THE ANSWER IS: #{mul_sum}").green.bright
    puts "**" * 15

  when 'd'
    puts "Division.."
    # Get first value
    print "Enter first value: "
    div1 = gets.to_f
    # Get second value
    print "Enter second value: "
    div2 = gets.to_f
    # find sum
    div_sum = div1 / div2
    # Output the answer
    puts "**" * 15
    puts Rainbow("THE ANSWER IS: #{div_sum}").yellow.bright
    puts "**" * 15

  when 'sq'
    puts "Square root.."
    # Get value
    print "Find the square root of: "
    sqr1 = gets.to_f
    # Find square root
    sqr_sum = Math.sqrt(sqr1)
    # Output
    puts "**" * 15
    puts Rainbow("THE SQUARE ROOT OF #{sqr1} IS #{sqr_sum}").red.bright
    puts "**" * 15

  when 'mt'
    puts "Mortgage Calculator.."

    print "Loan amount: "
    loan = gets.to_f

    print "Annual Interest: "
    int = gets.to_f / 12

    print "Years: "
    yrs = gets.to_i * 12



  else
    puts "invalid selection"
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts Rainbow("Tnx, come again.").white.bright.underline
