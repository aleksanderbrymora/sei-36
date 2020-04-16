class VideosController < ApplicationController
  def index
    @videos = Video.all
  end

  def new
    @videos = Video.new
  end

  def edit
    @videos = Video.find params[:id]
  end

  def show
    @videos = Video.find params[:id]
  end
end
