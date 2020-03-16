a = 1

if a>5
  puts "yes #{a} is greater than 5"
else
  puts "#{a} is something else"
end

######################

grade = "A"

if grade == "A"
  puts "you are killing it"
elsif grade == "B"
  puts "you are coating fine"
elsif grade == "C"
  puts "enough"
else
  puts "get out!"
end

#case ###

grade = "D"

=begin puts =end case grade  #can use puts top at here to avoid repeating.
when "A"
  puts"you are killing it"
when "B"
  puts "you are coating fine"
when "c"
  puts "enough"
else
  puts "get the fakout"
end

#modifier form # ########### or Backwards if statement
puts "yes is a is greater than 5"  if a > 5 #for single condition
 # alternative condition #---

live_server = false
 unless live_server
   puts "you are not live_server"
 end
