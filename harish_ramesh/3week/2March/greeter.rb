# Greeting program to experiment with keyboard input and screen output.#

puts "what is your name?: " #
name = gets.chomp #removes the new line

puts "Thank you for name #{name}"

print "what is surname: "
surname = gets.chomp

puts "your name is #{name.upcase} #{surname.upcase}"
