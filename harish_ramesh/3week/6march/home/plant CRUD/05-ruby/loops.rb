# while conditional
#   statements
# end

i = 0 # init
while i < 5 # conditional
  puts "i: #{ i }"
  i += 1 # update
end

puts "The end"

# if / unless
# while / until

i = 0
until i == 5
  puts "i: #{ i }"
  i += 1
end

# Iterators ####################################################################
5.times do
  puts "OMG"
end

5.times { puts "ZOMG" }

5.times do |j|
  puts "j: #{ j }"
end

10.downto(0) do |count|
  puts count
end
puts "Blast off"

# For loops ####################################################################
# Please don't use these
for n in 0..5 # Ranges
  puts n
end
