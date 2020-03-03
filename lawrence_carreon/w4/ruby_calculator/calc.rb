require "colorize"
require "pry"

def show_menu
    puts "What do you want to calculate today? (Input 1-5)
        [1] Arithmetic
        [2] Mortgage
        [3] BMI
        [4] Fuel
        [5] Exit"
    puts "=" * 40
end

def arithmetic
    result = nil
    while result == nil do
        puts "What kind of calculation do you want to do? (Input 1-6)
            [1] Addition
            [2] Subtraction
            [3] Division
            [4] Multiplication
            [5] Exponent
            [6] Square root"
        calc_choice = gets.chomp.downcase.to_i
        unless calc_choice.between?(1,6)
            puts "Please enter a valid input...".red
            next
        end
        print "Enter your first number (enter ans to use the previous result): ".yellow
        user_choice_one = set_to_previous_ans_or_self(gets.chomp)
        print "Enter your second number (enter ans to use the previous result): ".yellow
        user_choice_two = set_to_previous_ans_or_self(gets.chomp)
        unless (user_choice_one.is_a? Numeric) && (user_choice_two.is_a? Numeric)
            puts "One of your inputs was not a number or 'ans'!".red
            next
        end
        operators = ["n/a","+","-","/","x","^","to nth root of"]
        result = case calc_choice
        when 1
            addition(user_choice_one, user_choice_two)
        when 2
            subtraction(user_choice_one, user_choice_two)
        when 3
            division(user_choice_one, user_choice_two)
        when 4
            multiplication(user_choice_one, user_choice_two)
        when 5
            exponent(user_choice_one, user_choice_two)
        when 6
            nth_root(user_choice_one, user_choice_two)
        end
    end
    puts "#{user_choice_one} #{operators[calc_choice]} #{user_choice_two} = #{result}".green
    puts "=" * 40
    result     
end

def set_to_previous_ans_or_self(input)
    return input == "ans" ? @previous[:answer] : input.to_f
end

def mortgage
    puts "To be added when Lawrence is bothered!".green
    puts "=" * 40
end

def body_mass
    print "What is your weight in kilograms? "
    user_weight = set_to_previous_ans_or_self(gets.chomp)
    print "What is your height in centimetres? "
    user_height = set_to_previous_ans_or_self(gets.chomp)
    user_height = division(user_height,100.00)
    user_height = exponent(user_height,2)
    result = division(user_weight, user_height)
    puts "Your BMI is #{result}".green
    puts "=" * 40
    result
end

def fuel_efficiency
    print "How long is your trip in miles? "
    user_dist = set_to_previous_ans_or_self(gets.chomp)
    print "How many miles do you get per gallon? "
    miles_per_gallon = set_to_previous_ans_or_self(gets.chomp)
    print "What is the price of fuel per gallon? "
    price_of_gallon = set_to_previous_ans_or_self(gets.chomp)
    print "What is the speed you're travelling in miles per hour? "
    user_speed = set_to_previous_ans_or_self(gets.chomp)
    trip_time = user_dist / user_speed * 60
    trip_cost = user_dist / miles_per_gallon * price_of_gallon
    puts "The cost of your trip is $#{trip_cost} and will be #{trip_time} minutes long".green
    puts "=" * 40
end

def addition(num1,num2)
    num1 + num2
end

def subtraction(num1,num2)
    num1 - num2
end

def division(num1,num2)
    num1 / num2
end

def multiplication(num1,num2)
    num1 * num2
end

def exponent(num1,num2)
    num1 ** num2
end

def nth_root(num1,num2)
    num1 ** (1.0/num3)
end

@previous = { 
    answer: nil,
}

loop do
    show_menu
    user_choice = gets.chomp.to_i
    case user_choice
        when 1 
            @previous[:answer] = arithmetic
        when 2 
            mortgage
        when 3 
            @previous[:answer] = body_mass
        when 4 
            fuel_efficiency
        when 5
            puts "See ya nerd!".blue 
            exit
        else puts "Invalid input! Stick to the menu bruh".red
    end
end