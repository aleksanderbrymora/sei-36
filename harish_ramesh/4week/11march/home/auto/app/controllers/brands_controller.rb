class BrandsController < ApplicationController
  def index
    @brands = Brand.all
  end

  def new
    @brand = Brand.new
  end

  def create
    brand = Brand.create brand_params
    redirect_to brand
  end

  def edit
    @brand = Brand.find params[:id]
  end

  def update
    brand = Brand.find params[:id]
    brand.update brand_params
    redirect_to brand
  end

  def show
    @brand = Brand.find params[:id]
  end

  def destroy
    brand = Brand.find params[:id]
    brand.destroy
    redirect_to brands_path
  end

  private # The following methods aren't accessible outside of this class.
  def brand_params
    # Strong params: white list of sanitised input -- stuff we are happy to let the user provide.
    params.require(:brand).permit(:name, :nation, :established, :image)
  end
end
