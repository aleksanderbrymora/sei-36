### 1. Drinking age?
# - Ask the user for their age.
#     - Remember that anytime you get input, it is a string, so you will need to change the age input to a number.
# - If age is less than 18, print an appropriate message.
# - If the age is equal to or over 18, print a different message.

print "What is your age?: "
age = gets.to_i

if age < 18
  puts "Sorry, you're too young to drink :("
else
  puts "Cheers! You can drink! :)"
end

# ### 2. Air Conditioning
# - Ask the user what the current temperature is, if the A/C is functional, and what temperature they wish it was.
#     - If the airconditioner is functional and the current temperature is above the the desired temperature... display "Turn on the A/C Please"
#     - If the airconditioner is non-functional and the current temperature is above the the desired temperature... display "Fix the A/C now!  It's hot!"
#     - If the airconditioner is non-functional and the current temperature is below the the desired temperature... display "Fix the A/C whenever you have the chance...  It's cool..."

print "What is the current temperature? "
current_temp = gets.to_f

print "Is the A/C functional (y/n)? "
ac_func = gets[0].downcase

print "What is the temperature you wish it is? "
wish_temp = gets.to_f

# if current_temp > wish_temp && ac_func == "y"
#   puts "Turn on the A/C Please"
# elsif ac_func == "n" && current_temp > wish_temp
#   puts "Fix the A/C now! It's hot!"
# elsif ac_func == "n" && current_temp < wish_temp
#   puts "Fix the A/C whenever you have the chance... It's cool..."
# end

if ac_func == 'y'
  puts "Turn on the A/C Please" if current_temp > wish_temp
else
  if current_temp > wish_temp
    puts "Fix the A/C now! It's hot!"
  else
    puts "Fix the A/C whenever you have the chance... It's cool..."
  end
end
# ### 3. Sydney Suburbs
# - Create a program that asks what suburbs you live in.
# - Depending on the answer, print an appropriate response of your choosing

print "What suburb do you live in? "
suburb = gets.chomp.capitalize

# if suburb == "Rosebery"
#   puts "You live near The Cannery"
# elsif suburb == "Mascot"
#   puts "You live near The Airpot"
# elsif suburb == "Alexandria"
#   puts "You live near The Grounds"
# end

puts case suburb
when "Rosebery"
  "You live near The Cannery"
when "Mascot"
  "You live near The Airport"
when "Alexandria"
  "You live near The Grounds"
else
  "You live in Australia, I guess?"
end
