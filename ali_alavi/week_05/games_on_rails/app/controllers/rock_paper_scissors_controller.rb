class RockPaperScissorsController < ApplicationController
  def form
  end

  def result
    @result = ["Rock", "Paper", "Scissors"].sample
  end
end
