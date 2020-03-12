# Greeting program to experiment with keyboard input and screen output.

print "What is your name: " # Output
name = gets.chomp # Input with .chomp to remove the trailing new line.

puts "Thank you for entering your name, #{ name }."

print "What is your surname: "
surname = gets.chomp

puts "Your full name is #{ name } #{ surname.upcase }."

print "Where do you live: "
address = gets.chomp

puts "Your name is #{ name } #{ surname } and you live at #{ address }."
