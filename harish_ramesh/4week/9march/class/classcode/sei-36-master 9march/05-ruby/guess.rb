# # Title: Guess The Number

debug_mode = false

print "What is the maximum possible value you'd like to guess: "
MAX_VALUE = gets.to_i

SECRET_NUMBER = Random.rand 0..MAX_VALUE
puts "The computer picked: #{ SECRET_NUMBER }" if debug_mode


print "Guess the secret number between 0 and #{ MAX_VALUE }: "
guess = gets.to_i

until guess == SECRET_NUMBER
  if guess > SECRET_NUMBER
    print "Wrong! Guess lower: "
  else
    print "Wrong! Guess higher: "
  end
  guess = gets.to_i
end

puts "Congratulations!"
