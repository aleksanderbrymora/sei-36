require 'pry'
#require 'rainbow'

def show_menu
  puts "calculator"
  puts "-=" * 40
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[m] - multiplication"
  puts "[d] - division"
  puts "[e] - Exponential"
  puts "[sq]- squareroot"
  puts "[q] - Quit"
  print "enter your choice:"
end

#binding.pry  used for debugging
show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice
  when 'a'
      puts "enter two numbers for arithmetic operation"
      input1 = gets.to_i
      input2 = gets.to_i
      add = input1 + input2
      puts "the answer is #{add}"
  when 's'
      input1 = gets.to_i
      input2 = gets.to_i
      sub = input1 - input2
      puts "the answer is #{sub}"
  when 'm'
        input1 = gets.to_i
        input2 = gets.to_i
        sub = input1 * input2
        puts "the answer is #{sub}"
  when 'd'
          input1 = gets.to_i
          input2 = gets.to_i
          sub = input1/input2
          puts "the answer is #{sub}"
  when 'sq'
          input1 = gets.to_i
          sub = Math.sqrt(input1)
          puts "the answer is #{sub}"
  when 'e'
          input1 = gets.to_i
          input2 = gets.to_i
          sub = input1**input2
          puts "the answer is #{sub}"
  else
      puts "not a valid selection"
  end

    show_menu
    menu_choice = gets.chomp.downcase
end
  #case statement
