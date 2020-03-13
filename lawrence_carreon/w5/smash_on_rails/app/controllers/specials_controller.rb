class SpecialsController < ApplicationController
  def index
    @characters = Character.all
    @specials = Special.all
  end

  def new
    @special = Special.new
  end

  def create
    special = Special.create special_params
    redirect_to special
  end

  def edit
    @special = Special.find params[:id]
  end

  def update
    special = Special.find params[:id]
    special.update special_params
    redirect_to special
  end

  def show
    @special = Special.find params[:id]
  end

  def destroy
    special = Special.find params[:id]
    special.destroy
    redirect_to specials_path
  end

  private
  def special_params
    params.require(:special).permit :name, :franchise, :stock_symbol, :availability, :image
  end
end
