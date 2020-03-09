class RockController < ApplicationController
  def game
  end

  def result
    a = ['rock','paper','scissors']
    comp = a[rand(a.length)]
    player = params[:rock]
    if player == "rock" || player == "paper" || player == "scissors"
      if (player == "rock" && comp == "scissors") || (player == "scissors" && comp == "paper") || (player == "paper" && comp == "rock")
          @mess = "You won!"
      elsif (player == "rock" && comp == "rock") || (player == "paper" && comp == "paper") || (player == "scissors" && comp == "scissors")
          @mess = "Draw! No point awarded"
      else
          @mess = "You lose."
      end
    else
      @mess = "Invalid input"
    end
  end
end
