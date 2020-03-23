SECRET_NUMBER = Random.rand 0..10

print "guess"
guess = gets.to_i

until guess == SECRET_NUMBER
  print "wrong! guess again:"
  guess = gets.to_i
end
puts "congratulations"
#################################################
