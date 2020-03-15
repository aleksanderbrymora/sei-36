require 'pry'

def show_menu
  puts "-=" * 40 # Budget horizontal dividing line
  puts "Calculator"
  puts "-=" * 40 # Budget horizontal dividing line
  puts "[+] - Addition"
  puts "[-] - Subtraction"
  puts "[x] - Multiply"
  puts "[/] - Divide"
  puts "[%] - Modulo"
  puts "[sqrt] - Square root (sqrt 10)"
  puts "[exp] - A to the power of B (2 exp 5 )"
  puts "[q] - Quit"
  puts "Usage: 10 x 20"
  print "Pls enter type selection as per usage: "
end

def add(a,b)
  print "#{a} + #{b} = #{a + b}\n"
end

def minus(a,b)
  print "#{a} - #{b} = #{a - b}\n"
end

def multiply(a,b)
  print "#{a} x #{b} = #{a * b}\n"
end

def divide(a,b)
  print "#{a} + #{b} = #{a.to_f / b}\n"
end

def modulo(a,b)
  print "#{a_num} % #{b_num}  = #{a_bnum % b_num}\n"
end

# def x_pow_y(a_num,b_num)
#   a_num**b_num
# end


# binding.pry
input = [""]
a_num = 0;
b_num = 0;
operand = ""

until input[0] == 'q'

  case (input.length == 2 ? input[0] : input[1])
  when '+'
    add(a_num,b_num)
  when '-'
    minus(a_num,b_num)
  when 'x'
    multiply(a_num,b_num)
  when '/'
    divide(a_num,b_num)
  when '%'
      modulo(a_num,b_num)
  when 'sqrt'
    print "Square root of #{input[1]} = #{Math.sqrt(input[1].to_f)}\n"
  when 'exp'
    print "#{a_num} exp  #{b_num} = #{a_num**b_num}\n"
  else
    if input[0] == ""
      puts ""
    else
      puts "Invalid selection."
    end
  end
  show_menu
  input = gets.chomp.split(" ")
  # puts input
  if input.length != 1
    a_num   = (input.length == 2) ? input[1] : input[0].include?(".") ? input[0].to_f : input[0].to_i
    operand = (input.length == 2) ? input[0] : input[1]
    b_num   = (input.length == 2) ? 0 : input[2].include?(".") ? input[2].to_f : input[2].to_i
  end
end

puts "Thanks for using Simple Calculator."
