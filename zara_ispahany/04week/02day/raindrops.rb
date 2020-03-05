##warmup - raindrops

# print "number: "
# fac_num = gets.to_i
#
# puts "Pling" if fac_num % 3 == 0
#
# puts "Plang" if fac_num % 5 == 0
#
# if fac_num % 7 == 0
#   puts 'Plong'
# else
#   fac_num.to_s
#   puts "#{fac_num}"
# end

# def raindrops(fac_num)
#   fac_num = gets.to_i
#
#   puts "Pling" if fac_num % 3 == 0
#
#   puts "Plang" if fac_num % 5 == 0
#
#   if fac_num % 7 == 0
#     puts 'Plong'
#   else
#     fac_num.to_s
#     puts "#{fac_num}"
#   end
# end
#
# raindrops(28)
# raindrops(1755)
# raindrops(34)

##aleks method

def raindrops number
  text = '' #initialising with an empty string

  if number % 3 == 0
    text += 'Pling'
  end

  if number % 5 == 0
    text += 'Plang'
  end

  if number % 7 == 0
    text += 'Plong'
  end

  if text.size == 0
    number.to_s
  else
    text
  end

end

puts raindrops 28
puts raindrops 1755
puts raindrops 34
