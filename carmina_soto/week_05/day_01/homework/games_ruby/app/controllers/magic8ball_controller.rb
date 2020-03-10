class Magic8ballController < ApplicationController
  def home
  end

  def result
    answers = ['It is certain', 'As I see it, yes', 'Better not tell you now', 'Concentrate and ask again', 'Very doubtful', 'Do not count on it' ]
    @result = answers[rand(6)]
  end
end
