class PagesController < ApplicationController
  def index
  end

  def search
    @category = special_params[:category]
    @search_string = params[:search]
    @search_ids = case @category
    when "characters"
      Character.where("name LIKE ?","%#{@search_string.downcase.capitalize}%").pluck(:id)
    when "specials"
      Special.where("name LIKE ?","%#{@search_string.downcase.capitalize}%").pluck(:id)
    when "games"
      Game.where("name LIKE ?","%#{@search_string.downcase.capitalize}%").pluck(:id)
    end
    @potential_results = case @category
    when "characters"
      @category = "fighters"
      Character.all
    when "specials"
      Special.all
    when "games"
      Game.all
    end
    redirect_to root_path if @search_ids.size == 0
  end

  private
  def special_params
    params.require(:searches).permit :category
  end
end