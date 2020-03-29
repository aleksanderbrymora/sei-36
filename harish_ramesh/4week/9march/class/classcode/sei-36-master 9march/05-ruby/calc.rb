require 'pry'

def show_menu
  puts "Calculator" # TODO: you could use .center here to make this look nicer.
  puts "-=" * 40 # Budget horizontal dividing line
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[q] - Quit"
  # TODO: Add other options here
  print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice
  when 'a'
    puts 'Addition coming soon' # TODO: Implement addition
  when 's'
    puts 'Subtraction coming soon' # TODO: Implement subtraction
  else
    puts 'Invalid selection. You idiot.'
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using crappy calculator."

# binding.pry # like the JS debugger
