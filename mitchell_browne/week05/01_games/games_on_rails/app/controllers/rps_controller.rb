class RpsController < ApplicationController
  def home
  end

  def play
    @choiceThrow = params[:throw]
    @choiceImage = case @choiceThrow
    when 'rock' then 'https://lh3.googleusercontent.com/proxy/3FvjZ6_dB4ADaqvJGSn1LbDy2QKep6l76sAcPPtOTv4UvOx-ftQ0lKOqNmL25l9RZrntJXhYRstJK270OgBgufLh'
    when 'paper' then 'https://lh3.googleusercontent.com/proxy/PNDeDV5DaYHYrYsmAnO8-1tol_CQI9-kBhBukBMtMKXDJZAFbPPAP_o-eBdJlpQGdkbt_a1Abr1tvYM_yXH0bJiW'
    when 'scissors' then 'https://cdn.clipart.email/27a51dcf623e18678c88e1cd3853fc01_transparent-scissors-png-clipart-picture-gallery-yopriceville-_1349-1313.png'
    end

    @randomThrow = ['rock','paper','scissors'].sample

    @randomImage = case @randomThrow
    when 'rock' then 'https://lh3.googleusercontent.com/proxy/3FvjZ6_dB4ADaqvJGSn1LbDy2QKep6l76sAcPPtOTv4UvOx-ftQ0lKOqNmL25l9RZrntJXhYRstJK270OgBgufLh'
    when 'paper' then 'https://lh3.googleusercontent.com/proxy/PNDeDV5DaYHYrYsmAnO8-1tol_CQI9-kBhBukBMtMKXDJZAFbPPAP_o-eBdJlpQGdkbt_a1Abr1tvYM_yXH0bJiW'
    when 'scissors' then 'https://cdn.clipart.email/27a51dcf623e18678c88e1cd3853fc01_transparent-scissors-png-clipart-picture-gallery-yopriceville-_1349-1313.png'
    end

    win_condition = [
      ['rock','scissors','Win'],
      ['rock','paper','Lose'],
      ['rock','rock','Draw'],
      ['paper','scissors','Lose'],
      ['paper','paper','Draw'],
      ['paper','rock','Win'],
      ['scissors','scissors','Draw'],
      ['scissors','paper','Win'],
      ['scissors','rock','Lose']
    ]
    # p win_condition
    win_condition.each.with_index do |x, i|
      if @choiceThrow == x[0] && @randomThrow == x[1]
        @result = x[2]
        return
      end
    end
    render :result
  end
end
