i = 0
while i < 5
  puts "i: #{i}"
  i += 1
end

puts "The end"

# if / unless
# while / until

i = 0
until i == 5
  puts "i: #{i}"
  i += 1
end

# Iterators ####################################################################

5.times do
  puts "OMG"
end

5.times { puts "ZOMG" }

5.times do |hello|
  puts "hello: #{hello}"
end

10.downto(0) do |count|
  puts count
end
puts "Blast off!"
