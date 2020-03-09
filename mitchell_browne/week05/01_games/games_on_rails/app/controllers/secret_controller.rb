class SecretController <  ApplicationController
  def home
  end

  def result
    @number = params[:number]
    @random = rand(1..10)
    @result = (@number.to_i == @random) ? ("Guessed Correctly! You win nothing...") : ("Wrong guess! Have another go, if you dare...")
  end
end
