# require 'pry'

def show_menu
  puts "Calculator"
  puts "-=" * 40
  puts "[a] --Addition"
  puts "[s] --Subtraction"
  puts "[q] --Quit"
  print "Enter your Choice: "
end

# binding.pry

 #debugger

show_menu
menu_choice = gets.chomp.downcase


def addition
  print "what would you like to add number?:  "
  number_of_choice1 = gets.to_i
  print "what would you like to add number?:  "
  number_of_choice2 = gets.to_i
  number_of_choice1 + number_of_choice2
end

def subtraction
  print "what would you like to subtract number?:  "
  number_of_choice1 = gets.to_i
  print "what would you like to subtract number?:  "
  number_of_choice2 = gets.to_i
  number_of_choice1 - number_of_choice2
end


until menu_choice == "q"
  case menu_choice
  when 'a'
    result = addition
    puts "The result is #{ result }"


  when 's'
    result = subtraction
    puts "The result is #{ result }"

  else
    puts "Invalid You are an idiot. "

  end

  puts result
  show_menu
  menu_choice = gets.chomp.downcase

end

puts "Thank you for using crappy Calculator"
