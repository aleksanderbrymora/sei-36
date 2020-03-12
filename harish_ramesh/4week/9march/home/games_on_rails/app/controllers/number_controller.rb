class NumberController < ApplicationController
  def game
  end

  def result
    @my_num = rand(1..10)
    @number = params[:number].to_i
    if @number > 10 || @number < 1
      @message = "num shld be bw 1 and 10"
    elsif
      @my_num == @number
      @message = "congrats!"
    else
      @message = "you lost!"
    end
    @message
  end
end
