def raindrop number
	output = ''
	output += 'Pling' if number % 3 == 0
	output += 'Plang' if number % 5 == 0
	output += 'Plong' if number % 7 == 0
	output.size == 0 ? number.to_s : output
end

puts raindrop 28
puts raindrop 1755
puts raindrop 34
puts raindrop 3 * 5 * 7