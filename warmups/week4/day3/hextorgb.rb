def rgb_to_hex rgb
	hex = '#'
	rgb.map do |color|
		hex += convert_single color / 16
		hex += convert_single color % 16
	end
	hex
end

def convert_single num
	if num > 9
		(65 - 10 + num).chr
	else
		num.to_s
	end
end

puts rgb_to_hex [255, 255, 255]
puts rgb_to_hex [246, 12, 55]
puts rgb_to_hex [0, 234, 2]