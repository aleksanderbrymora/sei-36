class BallsController < ApplicationController
  def game
  end

  def result
    answers = [" It is certain.",
"It is decidedly so.",
"Without a doubt.",
"Yes - definitely.",
"You may rely on it.","As I see it, yes.",
"Most likely.",
"Outlook good.",
"Yes.",
"Signs point to yes.",
"Reply hazy, try again.",
"Ask again later.",
"Better not tell you now.",
"Cannot predict now."
]
    @question = params[:question]
    if @question.size > 6
      @answer = answers[rand(answers.length)]
    else
      @answer = "That's a Question??!!"
    end
  end
end
