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
		mountain = Mountain.create :name =>
		params[:name], :location => params[:location], :height => params[:height], :first_summit =>
		params[:first_summit]
		redirect_to mountain_path(mountain.id)
	end
	
end
