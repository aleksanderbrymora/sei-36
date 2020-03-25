class Atbash
  def intialize word
    @message = word
    @abc = ("a".."z").to_a
    @reversed = @letters.reverse
  end

  def convert_char letter
    index = @abc.index letter
    @reversed[index]
  end

  def encrypt
    encrypted_message = ''
    @message.chars.map do |x|
      encrypted_message += convert_char x
    end
    encrypted_message
  end
end

x = Atbash.new 'test'
puts x.encrypt
