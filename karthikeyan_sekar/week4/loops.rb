
#while conditionals
#statements
#end
#init, conditional, update
i = 0 # init
while i < 5 # conditional
  puts "i: #{i}"
  i += 1
end
puts "the end"

############Iterators################
5.times do
  puts "OMG"
end

5.times { puts "omg"}

###################################
j = 'omg'
5.times do |j|
  puts "J is #{j}"
end
