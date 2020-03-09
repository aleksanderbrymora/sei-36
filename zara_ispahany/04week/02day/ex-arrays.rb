days_of_the_week = %w/ Monday Tuesday Wednesday Thursday Friday Saturday Sunday /
puts "**" * 15
puts "Array Created.."
p days_of_the_week # p is for programmers

days_of_the_week.insert(0, days_of_the_week.last).pop
puts "**" * 15
puts "Move Sunday to the beginning.."
p days_of_the_week

# ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
days_of_the_week = [["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], ["Saturday", "Sunday"]] # find easier way
puts "**" * 15
p days_of_the_week

# Joels method
# days_of_the_week.unshift days_of_the_week.pop
# days_of_the_week.rotate! -1 is better

days_parts = [days_of_the_week[1..5], days_of_the_week.rotate[-2..-1]]

#.each - iterating with the each iterator method, which recieves a block
# days_of_the_week.each do |day|
#   puts day
# end
