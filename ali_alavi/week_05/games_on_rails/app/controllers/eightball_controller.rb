class EightballController < ApplicationController
  def form

  end

  def result
    @result = ["As I see it, yes.", "Ask again later.", "Outlook not so good.", "Very doubtful.", "It is decidedly so."].sample
  end
end
