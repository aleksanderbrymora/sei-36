class DirectorsController < ApplicationController
  def index
    @directors = Director.all
  end

  def new
    @director = Director.new
  end

  def create
    director = Director.create director_params
    redirect_to director
  end

  def edit
    @director = Director.find params[:id]
  end

  def update
    director = Director.find params[:id]
    director.update director_params
    redirect_to director
  end

  def show
    @director = Director.find params[:id]
  end

  def destroy
    director = Director.find params[:id]
    director.destroy
    redirect_to directors_path
  end

end

private # The following methods arent accesible outside of this class
  def director_params
    params.require(:director).permit(:name, :nationality, :born, :died, :image)
  end
