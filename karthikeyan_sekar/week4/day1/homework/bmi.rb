puts "Enter your body weight in lb"
mass = gets.to_i
puts "Enter the height in inches"
height = gets.to_i
bmi = (mass * 4.88)/(height * height)
puts "your BMI is #{bmi}"
