# # Array and Hash access
#
# ### A. Given the following data structure:
#
# ```ruby
a = ["Anil", "Erik", "Jonathan"]
# ```
#
# 1. How would you return the string `"Erik"`?
puts a[1]
# 1. How would you add your name to the array?
a << "Carmina"

p a

# ### B. Given the following data structure:
#
# ```ruby
h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}
# ```
#
# 1. How would you return the string `"One"`?
puts h[1]
# 1. How would you return the string `"Two"`?
puts h[:two]
# 1. How would you return the number `2`?
puts h["two"]
# 1. How would you add `{3 => "Three"}` to the hash?
h[3] = "Three"
puts h
# 1. How would you add `{:four => 4}` to the hash?
# h[:four] = 4
h.merge!({:four => 4})
puts h
#
# ### C. Given the following data structure:
#
# ```ruby
is = {true => "It's true!", false => "It's false"}
# ```
#
# 1. What is the return value of `is[2 + 2 == 4]`? It's True
# 1. What is the return value of `is["Erik" == "Jonathan"]`? It's False
# 1. What is the return value of `is[9 > 10]`? It's False
# 1. What is the return value of `is[0]`?  nil
# 1. What is the return value of `is["Erik"]`? nil
#
# ### D. Given the following data structure:
#
# ```ruby
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
#
#
# 1. How would you access Jonathan's Twitter handle (i.e. the string `"tronathan"`)?
p users["Jonathan"][:twitter]
# 1. How would you add the number `7` to Erik's favorite numbers?
p users["Erik"][:favorite_numbers] << 7
# 1. How would you add yourself to the users hash?
p users["Carmina"] = { :twitter => "kimmizucchini", :favorite_numbers => [12, 75, 8]}
# 1. How would you return the array of Erik's favorite numbers?
p users["Erik"][:favorite_numbers]
# 1. How would you return the smallest of Erik's favorite numbers?
p users["Erik"][:favorite_numbers].min
# 1. How would you return an array of Anil's favorite numbers that are also even?
p users["Anil"][:favorite_numbers].select {|n| n.even?}
# 1. How would you return an array of the favorite numbers common to all users?
p users.values.map { |u| u[:favorite_numbers] }.inject &:&
# 1. How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
p users.values.map { |u| u[:favorite_numbers] }.flatten.sort.uniq
