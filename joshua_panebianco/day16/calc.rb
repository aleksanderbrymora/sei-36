require 'pry'

def show_menu
  puts "Calculator"
	puts "-=" * 40
	puts "[a] - Addition"
	puts "[s] - Subtraction"
	puts "[m] - Multiplication"
  puts "[d] - Divide"
	puts "[r] - Square Root"
	puts "[h] - Mortgage Calculator"
	puts "[q] - Quit"
		# Other options
	print "Enter your Choice "
end

show_menu

print "Enter Your Choice: "
menu_choice = gets.chomp.downcase

until menu_choice == 'q'

		print "Enter the first number "
		first_number = gets.chomp.to_i
		print "Enter the second number "
		second_number = gets.chomp.to_i

	case menu_choice
	when 'a'
		puts first_number + second_number
	when 's'
		puts first_number - second_number
	when 'm'
		puts first_number * second_number
	when 'd'
		puts first_number / second_number
	when 'r'
		puts Math.sqrt(first_number)
	when 'h'
		puts "The monthly repayment will be $#{(first_number / 100) * 3.25}"
		
  else
		'Invalid selection. You idiot'
end

 show_menu
 menu_choice = gets.chomp.downcase
end

# binding.pry #
