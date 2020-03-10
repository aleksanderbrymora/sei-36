# examples of conditionals
a = 13

if a > 5
  puts "#{ a } is greater than 5"
elsif a == 0
  puts "a is 0"
else
  puts "#{ a } is less than or equal to 5"
end

######################################################################

grade = 'D'
if grade == 'A'
  puts "great!"
elsif grade == 'B'
  puts "good"
elsif grade == 'C'
  puts "ok"
else
  puts "no, bad"
end

# case #############################################################
grade = 'B'

case grade
when 'A'
  puts "yay A!"
when 'B'
  puts 'ya B!'
when 'C'
  puts "adequate"
else
  puts "see aleks" # default
end

# modifier form ######################################################

# if a > 5
#   # multiple lines
#   puts "yes a is greater than 5"
# end

#single put statemnt = modifier form
puts "Yes a is greater than 5" if a > 5

# Alternative conditions ###################
live_server = false

unless live_server #only going to happen if the if statement is false
  puts "You are not on the live server"
end

age = 35
puts "you are legally allowed to buy tobacco" unless age < 18
