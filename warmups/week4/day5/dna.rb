def difference d1, d2
	result = helper d1, d2
	puts "Difference: #{result.count true}"
	puts d1
	puts d2
	carrots = ''
	puts result.map {|x| x ? '^' : ' '}.join
	# result.map do |x|
	# 	if x == true
	# 		carrots += '^'
	# 	else
	# 		carrots += ' '
	# 	end
	# end
	# puts carrots
end

def helper d1, d2
	d1.split('').map.with_index { |x, i| x != d2[i] }
end

difference "GAGCCTACTAACGGGAT", "CATCGTAATGACGGCCT"