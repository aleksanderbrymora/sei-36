# require 'pry'

def show_menu
  puts "Calculator"
  puts "-=" * 40
  puts "[a] --Addition"
  puts "[s] --Subtraction"
  puts "[m] --Multiplification"
  puts "[d] --Divisition"
  puts "[e] --Exponents"
  puts "[sq] --Square Roots"
  puts "[q] --Quit"
  print "Enter your Choice: "
end

# binding.pry

 #debugger

show_menu
menu_choice = gets.chomp.downcase


def addition
  print "what would you like to add number?:  "
  choice1 = gets.to_i
  print "What would like to add number?: "
  choice2 = gets.to_i
  choice1 + choice2

end

def subtraction
  print "what would you like to subtract number?:  "
  choice1 = gets.to_i
  print "what would you like to subtract number?: "
  choice2 = gets.to_i
  choice1 - choice2
end

def multiplification
  print "what would you like for number?:  "
  choice1 = gets.to_i
  print "what would you like for number?: "
  choice2 = gets.to_i
  choice1 * choice2
end

def division
  print "what would you like for number?:  "
  choice1 = gets.to_i
  choice1 ** choice1

end

def exponents
  print "what would you like for number?:  "
  choice1 = gets.to_i
  print "what would you like for number?: "
  choice2 = gets.to_i
  choice1 ** choice2
end

def square_roots
  print "what would you like to square root?:  "
  choice1 = gets.to_i
  Math.sqrt(choice1)
end



until menu_choice == "q"

  case menu_choice
  when 'a'
    result = addition
    puts "The result is #{ result }"

  when 's'
    result = subtraction
    puts "The result is #{ result }"

  when 'm'
    result = multiplification
    puts "The result is #{ result }"

  when 'd'
    result = division
    puts "The result is #{ result }"

  when 'e'
    result = exponents
    puts "The result is #{ result }"
  when 'sq'
    result = square_roots
    puts "The result is #{ result }"

  else
    puts "Invalid You are an idiot. "

  end

  show_menu
  menu_choice = gets.chomp.downcase

end

puts "Thank you for using crappy Calculator"
