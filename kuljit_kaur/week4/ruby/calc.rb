require 'pry'
require 'rainbow'

$result = 0
$num1 = 0
$num2 = 0
def show_menu
puts "*-" * 40
puts Rainbow("CALCULATOR").bold.italic.blink.red
puts "*-" * 40
puts "[a] - Addition"
puts "[s] - Subtraction"
puts "[*] - Multiplication"
puts "[/] - Division"
puts "[sqrt] - Square Root"
puts "[exp] - Exponents"
puts "[q] - Quit"
end

def add_func
  $result = $num1 + $num2
  $num1 = $result
  puts Rainbow("Result : #{$result}").bold
end

def sub_func
  $result = $num1 - $num2
  $num1 = $result
  puts Rainbow("Result : #{$result}").bold
end

def mul_func
  $result = $num1 * $num2
  $num1 = $result
  puts Rainbow("Result : #{$result}").bold
end

def div_func
  $result = $num1 / $num2
  $num1 = $result
  puts Rainbow("Result : #{$result}").bold
end

def sqrt_func
  $result = Math.sqrt($result.to_i)
  puts Rainbow("Result : #{$result}").bold
end

def exp_func
  $result = Math.exp($result.to_i)
  puts Rainbow("Result : #{$result}").bold
end

# binding.pry   #debugger

show_menu
print "Enter first number : "
$num1 = gets.to_i
print "Enter your choice : "
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
if menu_choice != 'sqrt'
  print "Enter number : "
  $num2 = gets.to_i
else
  $num1 = $result
  if $result.to_i == 0
    print "Enter number : "
    $result = gets.to_i
  end
end
case menu_choice
when 'a'
  add_func
when 's'
  sub_func
when '*'
  mul_func
when '/'
  div_func
when 'sqrt'
  sqrt_func
when 'exp'
  exp_func
else
  puts "Invalid selection"
end

print "Enter your choice :"
menu_choice = gets.chomp.downcase

end

puts "Thanks for using Calculator"



  # print "Enter the numbers with the sign in between : "
  # num = gets.chomp.split "+"
  # sum = 0
  # i = 0
  # while i < num.length
  # sum = sum + num[i].to_i
  # i = i + 1
