# # Array and Hash access
#
# ### A. Given the following data structure:
#
# ```ruby
a = ["Anil", "Erik", "Jonathan"]
# ```

# 1. How would you return the string `"Erik"`?
# 1. How would you add your name to the array?

puts a[1]
a.push'Harish' # a << "Harish"
print a



# ### B. Given the following data structure:
#
# ```ruby
 h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}
# ```
#
# 1. How would you return the string `"One"`?
# 1. How would you return the string `"Two"`?
# 1. How would you return the number `2`?
# 1. How would you add `{3 => "Three"}` to the hash?
# 1. How would you add `{:four => 4}` to the hash?
for_one = h[1]
for_two = h[:two]
for_three = h["two"]
h[3] = "Three"
h[:four] = 4 #h.merge{:four => 4}
puts h
# ### C. Given the following data structure:
#
# ```ruby
is = {true => "It's true!", false => "It's false"}
# ```
#
# 1. What is the return value of `is[2 + 2 == 4]`? Ans: "It's true!"
# 1. What is the return value of `is["Erik" == "Jonathan"]`?"It's false"
# 1. What is the return value of `is[9 > 10]`?"It's false"
# 1. What is the return value of `is[0]`?Ans: "It's nil!" 0 evaluates to 0 itself
# 1. What is the return value of `is["Erik"]`?Ans: "It's nil!" Erik evaluates to itself




# ### D. Given the following data structure:
#

users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

j_t = users["Jonathan"][:twitter]
e_f_n = users["Erik"][:favorite_numbers].push 7 # << 7
users["Harish"] = { :twitter => "Hariomsambo",
  :favorite_numbers => [6,88,12]
}
erik_num = users["Erik"][:favorite_numbers]

smallest = erik_num.sort[0] # or erik_num.min

users["Anil"][:favorite_numbers].select do |n|
  n.even?
end

users["Anil"][:favorite_numbers].select {|n| n.even?}




# 1. How would you access Jonathan's Twitter handle (i.e. the string `"tronathan"`)?
# 1. How would you add the number `7` to Erik's favorite numbers?
# 1. How would you add yourself to the users hash?
# 1. How would you return the array of Erik's favorite numbers?
# 1. How would you return the smallest of Erik's favorite numbers?
# 1. How would you return an array of Anil's favorite numbers that are also even?
even = []
users["Anil"][:favorite_numbers].each do |n|
  if n%2 == 0
    even << n
  end
end

# 1. How would you return an array of the favorite numbers common to all users?

#[1,2,3] & [3,4,5] gives only common no.
#[1,2,3] | [3,4,5] gives all no. in one array and omits duplicates
#[1,2,3] + [3,4,5] gives all no. in one array and keeps duplicates


# 1. How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
