require 'pry'

puts "Welcome to Ruby REPL"
puts "-=" * 20
puts "Run programme by entering '[any] + [any]'"

print ">"
user_input = gets.chomp

until user_input == 'q'
    user_input = user_input.split(' ')
    arg1 = user_input[0]
    arg2 = user_input[2]
    oper = user_input[1]

    if arg1.to_i == 0 || arg2.to_i == 0
        puts "#{arg1 + arg2}"
    else 
        puts "#{arg1.to_i + arg2.to_i}"
    end

    print ">"
    user_input = gets.chomp
end