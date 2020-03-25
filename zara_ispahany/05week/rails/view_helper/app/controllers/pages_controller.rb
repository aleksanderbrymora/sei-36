class PagesController < ApplicationController
  def home
  end

  def numbers
    @amount = 2323
    @large_number = 34938498398
    @phone = 2125551212
  end

  def text
    @numbers = (1..20).to_a.shuffle
    @story = "A very very very very very very very very very very very very long time ago in a galaxy far far far far far far far far away"
    @friend_count = 50
    @enemy_count = 15
  end

  def assets
  end

  def url
  end
end
