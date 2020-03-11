class BuildingsController < ApplicationController
    def index
      @building = Buildings.all
    end
  
    def show
      @building = Building.find params[:id]
    end
  
    def new
    end
  
    def create
      building = Building.new
      building.name = params[:name]
      building.image = params[:image]
      building.meters = params[:orbit]
      building.country = params[:diameter]
      
      building.save
      redirect_to building_path(building.id)
    end
  
    def edit
      @building = Building.find params[:id]
    end
  
    def update
     building = Building.find params[:id]
     building.name = params[:name]
     building.image = params[:image]
     building.meters = params[:orbit]
     building.country = params[:diameter]
  
      building.save
      redirect_to building_path(building.id)
    end
  
    def destroy
      building = Building.find params[:id]
      building.destroy
      redirect_to buildings_path
    end
  end
  