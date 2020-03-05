# while condition
#   statements
# end

# init, conditional, update
i = 0 #init
while i < 5 #conditional
  puts "i: #{i}"
  i += 1 #update
end
puts "end of while loop"

# until is opposite of while loop
i = 0
until i == 5
  puts "i: #{i}"
  i += 1
end
puts "end of until loop"

#Iterators ######
puts "Iterators:"

5.times do
  puts "wow"
end
########################
5.times {puts "OMG"}
########################
5.times do |j| #placeholder
  puts "j: #{j}"
end
########################
10.downto(0) do |count|
  puts count
end
########################
# random numbers
# random.rand(40) #0-40
# random.rand(12..60) #12-60
