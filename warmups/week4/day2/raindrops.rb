def raindrops number
	text = ''
	text += 'Pling' if number % 3 == 0
	text += 'Plang' if number % 5 == 0
	text += 'Plong' if number % 7 == 0

	if text.size == 0
		number.to_s
	else
		text
	end
end

puts raindrops 28
puts raindrops 1755
puts raindrops 34
puts raindrops 3 * 5 * 7