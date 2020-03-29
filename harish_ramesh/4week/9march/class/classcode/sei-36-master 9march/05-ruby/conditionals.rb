# Examples of conditionals

a = 13

if a > 5
  puts "Yes, #{ a } is greater than 5"
elsif a == 0
  puts "a is 0"
else
  puts "#{ a } is less than or equal to 5"
end

################################################################################

grade = 'D'

if grade == 'A'
  puts "You're killing it"
elsif grade == 'B'
  puts "You are coasting fine"
elsif grade == 'C'
  puts "Adequate"
else
  puts "Please see Aleks after class"
end

# case #########################################################################
grade = 'B'

case grade
when 'A'
  puts "You're killing it"
when 'B'
  puts "You are coasting fine"
when 'C'
  puts "Adequate"
else
  puts "Please see Aleks after class" # default
end

# Modifier form ################################################################
# Backwards if statements

# if a > 5
#   # Multiple lines
#   puts "Yes a is greater than 5"
# end

puts "Yes a is greater than 5" if a > 5

# Alternative conditionals
live_server = false

unless live_server
  puts "You are not on the live server"
end

age = 35
puts "You are legally allowed to buy tobacco" unless age < 18
