class SingersController < ApplicationController
    def index
      @singers = Singer.all
    end

    def show
        @singer = Singer.find params[:id]
    end
    
    def new
    end

    def create
        singer = Singer.create :name => params[:name], :image => params[:image], :title => params[:title], :year_release => params[:year_release], :fans => params[:fans]
        redirect_to singers_path(singer.id) # show
      end
    
      def edit
        @singer = Singer.find params[:id]
      end

      def update
        singer = Singer.find params[:id]
        singer.name = params[:name]
        singer.image = params[:image]
        singer.title = params[:title]
        singer.year_release = params[:year_release]
        singer.fans = params[:fans]
        singer.save
        redirect_to singer_path(singer.id)
      end
    
      def destroy
        singer = Singer.find params[:id]
        singer.destroy 
        redirect_to singers_path
      end
end