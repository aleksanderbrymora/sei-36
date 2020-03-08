require 'pry'
days_of_the_week = %w/Monday Tuesday Wednesday Thursday Friday Saturday Sunday/
# puts days_of_the_week
# print days_of_the_week
# puts "Array of days_of_the_week: #{days_of_the_week}"
p days_of_the_week # p - puts for programmers

# .each - iterating with the each iterator method, which receives a block
# days_of_the_week.each do |day| #|day| - variable name
#   puts day
# end

# binding.pry

# Long winded but explicit
# moving_day = days_of_the_week.pop
# days_of_the_week.unshift moving_day

# Very Clever
# days_of_the_week.unshift days_of_the_week.pop

# Ruby-ish way
days_of_the_week.rotate! -1
p days_of_the_week
# days_of_the_week.pop ## Removes Sunday from last
# puts "Removes Sunday from the list: #{days_of_the_week}"
# days_of_the_week.insert 0, "Sunday" ## Adds Sunday on the first position
# puts "Inserts Sunday on the first position: #{days_of_the_week}"

days_parts = [days_of_the_week[1..5], days_of_the_week.rotate[-2..-1]]
p days_parts
# weekdays = days_of_the_week[1..5] ## Get all weekdays
# puts "Get weekdays: #{weekdays}"
# weekends = days_of_the_week[6], days_of_the_week[0] ## Get all weekends
# puts "Get weekends: #{weekends}"
# new_week = weekdays, weekends ## New array
# puts "New array of the week: #{new_week}"

days_parts.pop
p days_parts.flatten.sort
# new_week.pop ## Remove weekends
# puts "Removes weekends from the new array: #{new_week}"
# sorted_week = new_week[0].sort
# puts "Sorts weekdays alphabetically: #{sorted_week}" ## Sorts weekdays alphabetically
