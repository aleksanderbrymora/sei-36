def convert year
  roman_num = {
    100 => "C",
    90 => "XC",
    50 => "L",
    40 => "XL",
    10 => "X",
    9 => "IX",
    5 => "V",
    4 => "IV",
    1 => "I"
  }

  output = ''

  roman.each do |key, value|
    while year >= key
      output += value
      year -= key
    end
    break if year.zero?
  end

  output

end

puts convert 2100
