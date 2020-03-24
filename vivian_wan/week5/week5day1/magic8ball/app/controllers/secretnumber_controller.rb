class SecretnumberController < ApplicationController

    def form
    end

    # def random
    #     @randomnum = rand(1..10)
    #     render :winlose
    # end

    def winlose
        @randomnum = rand(1..10)
        @usernumber = params[:number]
        @randomnum < @usernumber ? "You WON" : "Sorry you LOST!"
    end
end