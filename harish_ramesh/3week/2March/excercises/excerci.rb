#1. Drinking age?
# Ask the user for their age.
# Remember that anytime you get input, it is a string, so you will need to change the age input to a number.
# If age is less than 18, print an appropriate message.
# If the age is equal to or over 18, print a different message.
#

#legal age checker
print "enter age:"

age = gets.chomp.to_i

unless age > 18 # any text converted to string would be zero.
  puts "you are not legally allowed to drink"
else
  puts "All good"
end

# AC required checker
print "whats the current temperature"
cur_temp = gets.chomp.to_i  # if we are converting to a number we dont need a chomp in here

print "Is AC is on?"

on_or_not = gets.chomp

print "whats req temp?"
req_temp = gets.chomp.to_i

if cur_temp > req_temp && on_or_not != "on"
  puts " switch on the AC and set the temp to #{req_temp}"
elsif cur_temp < req_temp && on_or_not == "on"
  puts "switch off the AC"
else
  puts "seems just fine"
end

#suburb checker

print "what suburb you live in?:"
suburb = gets.chomp
puts "#{suburb} yeah... that's a nice suburb to live in aye..!"
