# Examples of conditionals

a=0

if a>5
  puts "yes, #{a} is greater than 5"
elsif a == 0
  puts "a is 0"

else
  puts "#{a} is lesser than 5"
end

#############################################

grade = 'D'

if grade == 'A'
  puts "great!"
elsif grade == 'D'
  puts "worse"

else
  puts "meet me"
end

#############################################

grade = 'B'

case grade
when 'A'
  puts "you are killing it"
when 'B'
  puts "you are good"
when 'C'
  puts "you are okay"
else
  puts "please meet me"
end

# Modifier form ###########################################

puts "yes a is greater than 5" if a < 5

########################################################

#Alternative conditionals
live_server = false;

puts "server is not live " unless live_server

########################################################
