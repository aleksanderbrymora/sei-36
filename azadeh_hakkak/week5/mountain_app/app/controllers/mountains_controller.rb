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
    mountain = Mountain.create :name => params[:name], :elevation => params[:elevation], :location => params[:location], :first_ascent => params[:first_ascent], :image => params[:image]
    redirect to mountain_path(mountain.id)
  end

  def edit
    @mountain = Mountain.find params[:id]
  end

  def update
    mountain = Mountain.find params[:id]
    mountain.name = params[:name]
    mountain.elevation = params[:elevation]
    mountain.location = params[:location]
    mountain.first_ascent = params[:first_ascent]
    mountain.image = params[:image]
    mountain.save
    redirect to mountain_path(mountain.id)
  end

  def destroy
    mountain = Mountain.find params[:id]
    mountain.destroy
    redirect to(mountains_path)
  end

end
