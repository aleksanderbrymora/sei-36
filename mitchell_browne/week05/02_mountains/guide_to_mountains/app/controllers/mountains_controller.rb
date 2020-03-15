class MountainsController < ApplicationController
  def index
    @mountains = Mountain.all
  end

  def new
  end

  def create
    mountain = Mountain.create :name => params[:name], :image => params[:image], :location => params[:location], :elevation => params[:elevation], :first_ascent => params[:first_ascent], :first_ascender => params[:first_ascender], :google_rating => params[:google_rating]

    redirect_to mountain_path(mountain.id)
  end

  def show
    @mountain = Mountain.find params[:id]
  end

  def edit
    @mountain = Mountain.find params[:id]
  end

  def update
    mountain = Mountain.find params[:id]
    mountain.name = params[:name]
    mountain.image = params[:image]
    mountain.location = params[:location]
    mountain.elevation = params[:elevation]
    mountain.first_ascent = params[:first_ascent]
    mountain.first_ascender = params[:first_ascender]
    mountain.google_rating = params[:google_rating]
    mountain.save
    redirect_to mountain_path(mountain.id)
  end

  def destroy
    mountain = Mountain.find params[:id]
    mountain.destroy
    redirect_to mountains_path
  end
end
