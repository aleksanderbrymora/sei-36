print "> "
input = gets.split
def add (num1, num2)
  num1 + num2
end
until input[0] == "exit"
  output = add input[0], input[2]
  puts output
  print "> "
  input = gets.split
end
puts "Thanks for using!"
