class NumberController < ApplicationController
    def guess
    end

    def attempt
        @user_choice = params[:guess].to_i
        @secret_num = rand 1..10
        @user_choice == @secret_num ? redirect_to("/secret_number/correct") : redirect_to("/secret_number/wrong")
    end

    def wrong
    end

    def correct
    end
end