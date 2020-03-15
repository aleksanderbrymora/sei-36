require 'pry'
def rgb_to_hex rgb_input
  hex_letters = {"A" => 10, "B" => 11, "C" => 12, "D" => 13, "E" => 14, "F" => 15}
  hex = '#'
  rgb_input = rgb_input.split
  rgb_input.map do |x|
    hex1 = x.to_i / 16
    hex2 = x.to_i % 16
    if hex_letters.value?(hex1)
      hex += hex_letters.key(hex1)
    else
      hex += hex1.to_s
    end
    if hex_letters.value?(hex2)
      hex += hex_letters.key(hex2)
    else
      hex += hex2.to_s
    end
  end
  hex
end
puts rgb_to_hex "255 255 255"
puts rgb_to_hex "246 12 55"
puts rgb_to_hex "0 234 2"
