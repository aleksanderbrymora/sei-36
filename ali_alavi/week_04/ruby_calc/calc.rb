#menu selection as global
$menu_selection = ""
#menu choice
def show_menu
   puts "[a] - Add"
   puts "[s] - Subtract"
   puts "[m] - Multiplication"
   puts "[d] - Divide"
   puts "[e] - Exponent"
   puts "[r] - Square root"
   puts "[q] - Quit"
   print "Enter choice: "
   #menu_selection
   $menu_selection = gets.chomp.downcase
end

def add(a, b)
    a + b
end

def subtract(a, b)
    a - b
end

def multiplication(a, b)
    a * b
end

def divide(a, b)
    a / b
end

def exponent(a, b)
    a ** b
end

def squareroot(a)
    Integer.sqrt(a)
end

until show_menu == "q"  
case $menu_selection
    when "a"
        print "Enter first number: "
        a = gets.to_i
        print "Enter second number: "
        b = gets.to_i
        puts "#{a} + #{b} = #{add(a, b)}"
    when "s"
        print "Enter first number: "
        a = gets.to_i
        print "Enter second number: "
        b = gets.to_i
        puts "#{a} - #{b} = #{subtract(a, b)}"
    when "m"
        print "Enter first number: "
        a = gets.to_i
        print "Enter second number: "
        b = gets.to_i
        puts "#{a} * #{b} = #{multiplication(a, b)}"
    when "d"
        print "Enter first number: "
        a = gets.to_i
        print "Enter second number: "
        b = gets.to_i
        puts "#{a} / #{b} = #{divide(a, b)}"
    when "e"
        print "Enter first number: "
        a = gets.to_i
        print "Enter second number: "
        b = gets.to_i
        puts "#{a} to the power of #{b} = #{exponent(a, b)}"
    when "r"
        print "Enter the number: "
        a = gets.to_i
        puts "Square root of #{a} = #{squareroot(a)}"
    else
        puts "Invalid menu choice. Please enter a value from below: "
    end
end
#case 
#when 'a'
#    add
#end case
#print next choice
#menu_choice = gets.chomp.downcase
