# ### 2. Air Conditioning
# - Ask the user what the current temperature is, if the A/C is functional, and what temperature they wish it was.
#     - If the airconditioner is functional and the current temperature is above the the desired temperature... display "Turn on the A/C Please"
#     - If the airconditioner is non-functional and the current temperature is above the the desired temperature... display "Fix the A/C now!  It's hot!"
#     - If the airconditioner is non-functional and the current temperature is below the the desired temperature... display "Fix the A/C whenever you have the chance...  It's cool..."

print "What is the current temperature: "
current_temp = gets.to_f #if they want to say 31.5

print "Is the A/C functional? [y/n]: "
func_AC = gets.chomp

print "What's your desired temperature: "
desired_temp = gets.to_f

if func_AC == "y"
  if desired_temp < current_temp
    puts "Turn on the A/C Please"
  end
elsif func_AC == "n"
  if desired_temp < current_temp
    puts "Fix the A/C now!  It's hot!"
  end
  if desired_temp > current_temp
    puts "Fix the A/C whenever you have the chance...  It's cool..."
  end
end

#joels method
print "What is the current temperature: "
current2_temp = gets.to_f #if they want to say 31.5

print "Is the A/C functional?: "
func_AC2 = gets[0].downcase

print "What's your desired temperature: "
desired_temp2 = gets.to_f

if func_AC2 == 'y'
  puts "Turn on the AC please" if current2_temp > desired_temp2
else
  if current2_temp > desired_temp2
    puts "Fix AC now it hot!"
  else
    puts "fix the ac when u have a chance its cool"
  end
end
