# HEX TO RGB

# print "Enter a #HEX colour: "
# colour_hex = gets.chomp

def get_rgb(colour_hex)
  first = colour_hex[0] + colour_hex[1]
  rgb1 = first.hex

  second = colour_hex[2] + colour_hex[3]
  rgb2 = second.hex

  third = colour_hex[4] + colour_hex[5]
  rgb3 = third.hex

  puts "rgb(#{rgb1}, #{rgb2}, #{rgb3})"
end

get_rgb("FFFFFF")
get_rgb("F60C37")
