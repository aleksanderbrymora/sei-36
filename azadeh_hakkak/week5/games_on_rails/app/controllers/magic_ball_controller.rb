class MagicBallController < ApplicationController

  def form
  end
  def result
    @question = params[:question]
    @possible_answers = ['Without a doubt.', 'It is certain.', 'Concentrate and ask again.', 'Better not tell you now.', 'My sources say no.', 'Don\'t count on it.'].sample
  end
end
