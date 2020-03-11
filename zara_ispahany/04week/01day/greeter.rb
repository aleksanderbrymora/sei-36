# greeting program

print "What's your name: " #output/ print will leave the cursor on the line
name = gets.chomp #input

puts "thnx for entering your name, #{name}." #chomp removes /n

print "what is ur surname: "
surname = gets.chomp

puts "fullname: #{ name } #{ surname.upcase }"

print "where you live: "
address = gets.chomp

puts "your name is #{ name } #{ surname } and you live at #{ address }. "
