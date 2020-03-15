print "what is your name: " # output
name = gets.chomp() # input
puts "Thank you for entering your name, #{ name }."

print "what is your surname: " # output
surname = gets.chomp()
puts "your full name is #{name} #{surname.upcase}."

#using puts
# print "what is your name: " # output
# name = gets.chomp() # input
# puts "Thank you for entering your name, #{ name }."

# ~/projects/sei-36/karthikeyan_sekar/05-ruby $ touch greeter.rb
# ~/projects/sei-36/karthikeyan_sekar/05-ruby $ atom .
# ~/projects/sei-36/karthikeyan_sekar/05-ruby $ cat greeter.rb
# puts "what is your name: " # output
# name = gets() # input
# puts "Thank you for entering your name, #{ name }."
# ~/projects/sei-36/karthikeyan_sekar/05-ruby $ ruby greeter.rb
# what is your name:
# karthik
# Thank you for entering your name, karthik

#using print
# /projects/sei-36/karthikeyan_sekar/05-ruby $ ruby greeter.rb
# what is your name: karthik
# Thank you for entering your name, karthik

#using chomp
# print "what is your name: " # output
# name = gets.chomp() # input
# puts "Thank you for entering your name, #{ name }."
