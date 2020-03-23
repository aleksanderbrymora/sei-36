require 'pry'


def show_menu
  puts "Calculator" # TODO you could use .center to make it look nicer
  puts "-=" * 40
  puts "[a] -- Addition"
  puts "[s] -- Subtraction"
  puts "[m] -- Multiply"
  puts "[d] -- Division"
  puts "[e] -- Exponents"
  puts "[q] -- Quit"
  puts "[sq] -- Square-root"
  print "Enter your chioce:"
end



show_menu
menu_choice = gets.chomp.downcase

print "insert a number"
num1 = gets.to_f

print "insert another number"
num2 = gets.to_f

def add(num1, num2)
  result = num1 + num2
  puts result
end

def sub(num1, num2)
  result = num1 - num2
  puts result
end

def mul(num1, num2)
  result = num1 * num2
  puts result
end

def div(num1, num2)
  result = num1 / num2
  puts result
end

def exp(num1, num2)
  result = num1 ** num2
  puts result
end

def sq_number(num1)
  result = Math.sqrt(num1)
  puts result
end

until menu_choice == "q"
  case menu_choice
    when 'a'
      add(num1, num2)

    when 's'
      sub(num1, num2)

    when 'm'
      mul(num1, num2)

    when 'd'
      div(num1, num2)

    when 'e'
      exp(num1, num2)

    when 'sq'
      sq_number(num1)

    else
      puts "Invalid selection."
  end

    show_menu
    menu_choice = gets.chomp.downcase

end
  puts "Thanks for using crappy calculator!"

  # binding.pry #debugger
