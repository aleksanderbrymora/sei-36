class RockPaperScissorsController < ApplicationController
  def home
  end

  def play
    gameplay = ['rock', 'paper', 'scissors']
    @computer_play = gameplay[Random.rand 0..2]
    if params[:throw] == @computer_play
      @message = "You win!"
    else
      @message = "You lose!"
    end
  end
end
