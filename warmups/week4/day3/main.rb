require 'pry'

def convert_num_to_hex num
	if num >= 10
		(65 - 10 + num).chr
	else
		num.to_s
	end
end

def rgb_to_hex rgb
	hex = ''
	rgb.map do |color|
		hex += convert_num_to_hex color / 16
		hex += convert_num_to_hex color % 16
	end
	hex
end


# binding.pry

puts rgb_to_hex [255, 255, 255]
puts rgb_to_hex [246, 12, 55]
puts rgb_to_hex [0, 234, 2]