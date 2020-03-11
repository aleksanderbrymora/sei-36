class PagesController < ApplicationController
  def index
  end

  def search
    binding.pry
  end
end


 # search_id = Fighter.where("name like?","%#{params[:name].downcase.capitalize}%").pluck(:id)
    # unless search_id.size == 0
    #     search_id = search_id.first
    #     redirect to "/fighters/#{search_id}"
    # else
    #     redirect to "/"
    # end