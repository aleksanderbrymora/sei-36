class BeachesController < ApplicationController
  def index
    @beaches = Beach.all
  end

  def show
    @beach = Beach.find params[:id]
  end

  def new
  end

  def create
    beach = Beach.create :name => params[:name], :location => params[:location], :area => params[:area], :tourists => params[:tourists], :image => params[:image]
    redirect_to beach_path(beach.id)
  end

  def edit
    @beach = Beach.find params[:id]
  end

  def update
    beach = Beach.find params[:id]
    beach.name = params[:name]
    beach.location = params[:location]
    beach.area = params[:area]
    beach.tourists = params[:tourists]
    beach.image = params[:image]
    beach.save
    redirect_to beach_path(beach.id)
  end

  def destroy
    beach = Beach.find params[:id]
    beach.destroy
    redirect_to beaches_path
  end
end
