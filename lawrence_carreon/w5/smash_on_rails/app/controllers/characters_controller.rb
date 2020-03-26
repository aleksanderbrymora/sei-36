class CharactersController < ApplicationController
  def index
    @characters = Character.all
  end

  def new
    @character = Character.new
  end

  def create
    character = Character.create character_params
    redirect_to character
  end

  def edit
    @character = Character.find params[:id]
  end

  def update
    character = Character.find params[:id]
    character.update character_params
    redirect_to character
  end

  def show
    @character = Character.find params[:id]
  end

  def destroy
    character = Character.find params[:id]
    character.destroy
    redirect_to characters_path
  end

  private #not accessible outside of this class
  def character_params
    params.require(:character).permit :name, :franchise, :stock_symbol, :availability, :image
  end
end
