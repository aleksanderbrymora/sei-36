class CustomersController < ApplicationController
  def index
      @customers = Customer.all
    end

    def new
      @customer = Customer.new
    end

    def create
     customer  = Customer.create customer_params
     redirect_to customer
    end

    def edit
      @customer = Customer.find params[:id]
    end

    def update
      @customer = Customer.find params[:id]
      @customer.update customer_params
      redirect_to @customer
    end

    def show
      @customer = Customer.find params[:id]
    end

    def destroy
      customer = Customer.find params[:id]
      customer.destroy
      reditect_to customer_path
    end

    private #The following methods aren't accessible outside of this class
    def customer_params
      params.require(:customer).permit(:name,:country, :city, :postal_code, :street, :image)
    end
end
