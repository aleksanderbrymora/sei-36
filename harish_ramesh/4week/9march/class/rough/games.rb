def magic_question
  print "Ask me a question: "
  @question = gets.chomp
end



@answers = [" It is certain.",
"It is decidedly so.",
"Without a doubt.",
"Yes - definitely.",
"You may rely on it."]

def magic_eight
  magic_question()
  if @question.size > 5
    puts @answers[rand(@answers.length)]
  else
    puts "That's invalid question"
  end
end

# magic_eight()

def num_prompt
  print "Give me a Integer bw 1 to 10: "
  @number = gets.to_i
end

@my_num = rand(1..10)

def guess_num
  num_prompt()
  if @number > 10 || @number < 1
    puts "num shld be bw 1 and 10"
  elsif
    @my_num == @number
    puts "congrats!"
  else
    puts "you lost!"
  end
end

guess_num()
