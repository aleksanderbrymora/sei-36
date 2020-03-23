def s1 num
	num % 2
end

def s2 num
	(1..num).to_a.sum
end

def s3 num
	result = (1..num).to_a.map.with_index {|x, i| i.even? ? x * -1 : x}
	result.reduce {|memo, x| memo * x}
end

puts s1 4
puts s2 4
puts s3 4