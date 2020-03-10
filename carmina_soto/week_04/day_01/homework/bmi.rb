require 'pry'
puts "BMI Calculator"
print "Enter height in cm: "
height = gets.to_i
print "Enter weight in kg: "
weight = gets.to_i

def convert_cm_to_m (cm)
  result = cm.to_f / 100
end

def compute_bmi (height, weight)
  height_in_m = convert_cm_to_m(height)
  bmi = weight / (height_in_m * height_in_m)
end

final_bmi = compute_bmi height, weight
puts "Your BMI is #{final_bmi.round 2}"
