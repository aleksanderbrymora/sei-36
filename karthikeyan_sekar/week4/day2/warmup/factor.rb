puts "enter the number to find the factor"
number = gets.to_f
x = [2, 3, 5, 7,11]
for i in x do
  numbers = number % i
  if numbers == 0
  puts "#{number} has #{numbers} as a factor"
end
end
