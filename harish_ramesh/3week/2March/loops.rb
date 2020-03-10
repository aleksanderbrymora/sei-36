# while conditional
#  statements
#end


# init, conditional, update
###### while
i=0

while i<5 # conditional
  puts "i: #{i}"
  i += 1 # update
end

puts "the end"

#if/unless
#while/until
#   until ######
i=0
until i==5
  puts "i: #{i}"
  i += 1 # update
end

# iterators ##########

5.times do # 5.times { puts "omg"} use {} for do if its only one line of code
  puts "OMG"
end


10.downto(0) do |count|
  puts count
end

##### For loops ---- dont have to upcase
for n in 0..5 #ranges
  puts n
end

### Random #####

Random.rand

#or


Random.rand(10) # gives random no bw 1 to 10
Random.rand(10..45) # gives random no bw 10 to 45
# or simply rand
