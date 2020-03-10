# ## BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight

print "What is your weight?: "
weight = gets.chomp.to_i

print "What is your height?: "
height = gets.chomp.to_f / 100


bmi = weight / (height * height)
print "Your BMI is #{ bmi.ceil }"
