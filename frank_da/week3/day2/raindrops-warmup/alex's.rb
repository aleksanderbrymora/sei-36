
def raindrops number
    text = ''
    #text += 'Pling' if number % 3 == 0

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
puts raindrops 3 * 5 *7