class MountainsController < ApplicationController
  def index
    @mountains = Mountain.all
  end

  def show
    @mountain = Mountain.find params[:id]
  end

  def new
  end

  def create
    mountain = Mountain.create :name => params[:name], :country => params[:country], :altitude => params[:Altitude], :image => params[:image]
    redirect_to mountain_path(mountain.id) # show
  end

  def edit
    @mountain = Mountain.find params[:id]
  end

  def update
    mountain = Mountain.find params[:id]
    mountain.name = params[:name]
    mountain.country = params[:country]
    mountain.altitude = params[:altitude]
    mountain.image = params[:image]
    mountain.save
    redirect_to mountain_path(mountain.id) # show
  end

  def destroy
    mountain = Mountain.find params[:id]
    mountain.destroy # Alderaan
    redirect_to mountains_path
  end
end
