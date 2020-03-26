#require 'pry'
#require rainbow === color extension
#poignant.guide -- book
def show_menu
  puts "calculator" # could use .center
  puts "-=" * 40 # gives this symbol 40 times
  puts"[a] - Addition"
  puts"[s] - Subtraction"
  puts"[d] - Division"
  puts"[m] - Multiplication"
  puts"[e] - Exponent"
  puts"[r] - Square root"
  puts"[b] - BMI"
  puts"[t] - Trip advice"
  puts"[q] - quit"
  print "Enter your choice: "
end

#binding.pry ----- for debugging limit


show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice
  when 'a'#addition
    print "Enter first number:"
    num_1 = gets.to_f
    print "Enter second number:"
    num_2 = gets.to_f
    puts " The addition of numbers provided is #{num_1+num_2}."
  when 's'#subraction
    print "Enter first number:"
    num_1 = gets.to_f
    print "Enter second number:"
    num_2 = gets.to_f
    puts " The subraction of #{num_1} from #{num_2} is #{num_1 - num_2}."
  when 'd'#division
    print "Enter dividend: "
    dnd = gets.to_f
    print "Enter divisor: "
    dsr = gets.to_f
    puts "  #{dnd} divided by #{dsr} is #{dnd/dsr}."
  when 'm'
    print "Enter first number:"
    num_1 = gets.to_f
    print "Enter second number:"
    num_2 = gets.to_f
    puts " The Multiplication of #{num_1} and #{num_2} is #{num_1 * num_2}."
  when 'e'
    print "Enter base number:"
    num_1 = gets.to_f
    print "Enter power:"
    num_2 = gets.to_f
    puts " The exponent of base #{num_1} to the power of #{num_2} is #{num_1 ** num_2}."
  when 'r'
    print "Enter number to be suarerooted:"
    num = gets.to_f
    puts " The square root of #{num} is #{Math.sqrt(num)}."
  when 'b'
    print "Enter height in meter: "
    height = gets.to_f
    print "Enter weight in kg: "
    weight = gets.to_f
    puts "Your BMI is #{(weight/(height ** 2)).round(2)}"
  when 't'
    print "Enter distance in KM: "
    dist = gets.to_f
    print "Enter Kilometers runs per litre of fuel: "
    mile = gets.to_f
    print "Enter price per litre of fuel: "
    price = gets.to_f
    print "Enter Average speed in km/hr: "
    speed = gets.to_f
    puts "Your travel cost is $#{((dist/mile)*price).round(2)}"
    puts "Your approximate journey time is #{(dist/speed).round(2)} hours."
  else
    puts "invalid selection"
  end
  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using calculator..!"
