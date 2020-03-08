require 'pry'
require 'rainbow'

def show_menu
  puts "Calculator" #TODO: use center to make this look nicer
  puts "-=" * 40
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[m] - Multiplication"
  puts "[d] - Division"
  puts "[e] - Exponents"
  puts "[r] - Square Root"
  puts "[q] - Quit"
  #TODO: Add other options here
  print "Enter your choice: "
end

# binding.pry #debugger

def addition (num1, num2)
  num1 + num2
end

def subtract (num1, num2)
  num1 - num2
end

def multiply (num1, num2)
  num1 * num2
end

def divide (num1, num2)
  num1 / num2
end

def exponent (num1, num2)
  num1 ** num2
end

def square_rt (num)
  Math.sqrt(num).floor
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == "q"
  case menu_choice
  when "a"
    print "Enter numbers: "
    num = gets.split
    puts "The result is #{addition num[0].to_i, num[1].to_i}"
  when "s"
    print "Enter numbers: "
    num = gets.split
    puts "The result is #{subtract num[0].to_i, num[1].to_i}"
  when "m"
    print "Enter numbers: "
    num = gets.split
    puts "The result is #{multiply num[0].to_i, num[1].to_i}"
  when "d"
    print "Enter numbers: "
    num = gets.split
    puts "The result is #{divide num[0].to_i, num[1].to_i}"
  when "e"
    print "Enter numbers [exponent to be entered last]: "
    num = gets.split
    puts "The result is #{exponent num[0].to_i, num[1].to_i}"
  when "r"
    print "Enter number: "
    num = gets.to_i
    puts "The result is #{square_rt num}"
  else
    puts "Invalid selection. You idiot."
  end
show_menu
menu_choice = gets.chomp.downcase
end

puts "Thanks for using crappy calculator."
