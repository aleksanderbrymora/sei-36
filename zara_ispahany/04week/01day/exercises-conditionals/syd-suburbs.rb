# ### 3. Sydney Suburbs
# - Create a program that asks what suburbs you live in.
# - Depending on the answer, print an appropriate response of your choosing

print "what suburb do you live in: "
residence = gets.chomp.capitalize

puts case residence
when 'Glebe'
  "Beautiful foreshore walk"
when 'Mascot'
  "cool crumbling apartmnet block"
else "That's nice "
end
