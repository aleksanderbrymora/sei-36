print "enter your age " # output
age = gets.to_i # input
if age>=18
  puts "you are a major"
else
  puts "you are a minor"
end

#########################################

print "What is the current temperature? " # output
temps = gets.to_i
print "What is the desired temperature? "
tem = gets.to_i
print "whether the A/C is functional "
f_cond = gets[0].downcase

if temps > tem
  puts "turn on the AC please" if f_cond == "y"
elsif temps > tem && f_cond == "n"
  puts "fix the AC now, its hot"
else
  puts "Fix the A/C whenever you have the chance... It's cool..."
end

##############################################

print "which suburb do you live in"
resid = gets.chomp.capitalize

puts case resid
when 'Homebush'
  "beautiful"
when 'Parramatta'
  "crowded"
when 'Manly vale'
  "beach house"
else
  "I dont know sorry"
end

###############################################
