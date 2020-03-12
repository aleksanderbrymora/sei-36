class PagesController < ApplicationController
  def home
  end

  def result

    @answers = ["It is certain.","As I see it, yes.","Reply hazy, try again.","Don't count on it."]

    @fortune = @answers.sample

  end

end
