# class
#
#
# def encode string
#   plain = "abcdefghijklmnopqrstuvwxyz".split('').to_a
#   cipher = "zyxwvutsrqponmlkjihgfedcba".split('').to_a
#   input_number = string.split('').to_a
#   input_number.each do | word |
#
#
# end


# Alek version

class Atbash

  def initialize word
    @message = word
    @abc = ('a'..'z').to_a
    @reversed = @abc.reverse
  end

  def convert_char letter
    index = @abc.index letter
    @reversed[index]
  end

  def encrypt
    encryped_message = ''
    @message.chars.map do |x|
      encryped_message += convert_char x
    end
    encryped_message
  end
end


x = Atbash.new "test"
puts x.encrypt


# def atbash_short message
#   message.downcase.chars.map {|x|(122 - (x.ord - 97)).chr}.join
#
# end
#
# puts atbash_short "test"
