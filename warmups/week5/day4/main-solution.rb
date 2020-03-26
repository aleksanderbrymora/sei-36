class Luhn
	def initialize num
		@number = num
	end

	def prepare_digits
		processed_digits = []
		@number.digits.reverse.map.with_index do |digit, index|
			digit *= 2 if index.even?
			digit -= 9 if digit >= 10
			processed_digits << digit
		end
		processed_digits
	end

	def valid?
		digits = prepare_digits
		total = digits.sum

		if total % 10 == 0
			puts "Number #{@number} is valid"
			true
		else
			puts "Number #{@number} is invalid"
			check_digit = @number + (10 - total % 10)
			puts "#{check_digit} would be a valid Luhn number"
			false
		end
	end
end

some_num = Luhn.new 8763
other_num = Luhn.new 3554

some_num.valid?
other_num.valid?

def short_luhn num
	processed_digits = []
	num.digits.reverse.map.with_index do |digit, index|
		digit *= 2 if index.even?
		digit -= 9 if digit >= 10
		processed_digits << digit
	end
	processed_digits.sum % 10 == 0 ? true : false
end

puts '='*20
puts short_luhn 8763
puts short_luhn 2554