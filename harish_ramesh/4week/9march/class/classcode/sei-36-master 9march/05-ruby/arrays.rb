require 'pry'

# ### 1. Create an array of the days of the week
# - Create a variable named `days_of_the_week` as an array of the following:
#     - Monday
#     - Tuesday
#     - Wednesday
#     - Thursday
#     - Friday
#     - Saturday
#     - Sunday

days_of_the_week = %w( Monday Tuesday Wednesday Thursday Friday Saturday Sunday )

# puts days_of_the_week
# print days_of_the_week

p days_of_the_week # p - puts for programmers

# .each - iterating with the each iterator method, which receives a block

# days_of_the_week.each do |day|
#   puts day.upcase
# end


# ### 2. My calendar says the first day is Sunday...
# - Remove Sunday from the last postion and move it to the first position.  Use array methods.

# Long winded but explicit
# moving_day = days_of_the_week.pop
# days_of_the_week.unshift moving_day

# Very clever
# days_of_the_week.unshift days_of_the_week.pop

# Most Rubyish:
days_of_the_week.rotate! -1

p days_of_the_week

# ### 3. Create a new array of the days of the week:
# - The first inner array should be the weekdays
# - The second inner array should be the weekend days

day_parts = [ days_of_the_week[1..5], days_of_the_week.rotate[-2..-1] ]
p day_parts

# ### 4. Remove either the weekdays or the weekends
# Your choice...
day_parts.pop

# ### 5. Sort the remaining days alphabetically
p day_parts.flatten.sort
