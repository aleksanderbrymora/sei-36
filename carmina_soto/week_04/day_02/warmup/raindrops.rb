def raindrops number
  rain = ''
  if number % 3 != 0 && number % 5 != 0 && number % 7 != 0
    rain = number.to_s
  else
    rain += "Pling" if number % 3 == 0
    rain += "Plang" if number % 5 == 0
    rain += "Plong" if number % 7 == 0
  end
end

puts raindrops 28
puts raindrops 1755
puts raindrops 34
puts raindrops 3 * 5 * 7
