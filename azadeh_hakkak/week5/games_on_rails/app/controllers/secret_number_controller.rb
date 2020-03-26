class SecretNumberController < ApplicationController

  def form
  end


  def result
      @guessed_number = params[:number].to_i
      number = rand(1..10)
      if @guessed_number == number ? @message = "you won!" : @message = "try again"
      end
  end
end
