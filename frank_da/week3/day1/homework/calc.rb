require 'pry'

def show_menu
    puts "Calculator"   # TODO: you could use .center here to make this look nicer.
    puts "-=" * 40  # Budget horizontal dividing line.
    puts "[a] - Addition"
    puts "[s] - Subtraction"
    puts "[m] - Multiply"
    puts "[d] - Divide"
    puts "[q] - Quit"
    puts "[ex] - Exponents"
    puts "[sr] - Square Root"
    # TODO: Addother options here
    print "Enter your choices: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice =='q'
    case menu_choice
    when 'a'
        
        puts "Addition coming soon" # TODO: Implement addition
        # p menu_choice --- for debugger purpose
        print "Input: "
        user_input = gets.split(' ')
        user_output = user_input[0].to_i + user_input[1].to_i
        puts "Output: #{user_output}"
        print "Press any to continue \n"
        gets
    when 's'
        puts "Subtraction coming soon"
        print "Input: "
        user_input = gets.split(' ')
        user_output = user_input[0].to_i - user_input[1].to_i
        puts "Output: #{user_output}"
        print "Press any to continue \n"
        gets
    when 'm'
        puts "Subtraction coming soon"
        print "Input: "
        user_input = gets.split(' ')
        user_output = user_input[0].to_i * user_input[1].to_i
        puts "Output: #{user_output}"
        print "Press any to continue \n"
        gets
    when 'd'
        puts "Subtraction coming soon"
        print "Input: "
        user_input = gets.split(' ')
        user_output = user_input[0].to_i / user_input[1].to_i
        puts "Output: #{user_output}"
        print "Press any to continue \n"
        gets
    when 'ex'
        puts "Subtraction coming soon"
        print "Input: "
        user_input = gets.split(' ')
        user_output = user_input[0].to_i ** user_input[1].to_i
        puts "Output: #{user_output}"
        print "Press any to continue \n"
        gets
    when 'sr'
        puts "Subtraction coming soon"
        print "Input: "
        user_input = gets.to_i
        user_output = Math.sqrt(user_input)
        puts "Output: #{user_output}"
        print "Press any to continue \n"
        gets
    else
        puts "Invalid selection. You idiot."
    end

    show_menu
    menu_choice = gets.chomp.downcase
end

puts "Thanks for using crappy calculator."

binding.pry # Same as debugger in Javascript
