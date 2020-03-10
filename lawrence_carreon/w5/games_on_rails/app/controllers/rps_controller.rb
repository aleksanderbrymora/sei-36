class RpsController < ApplicationController
    def choose
    end

    def result
        @user_choice = params[:choice]
        rps_table = {
            "rock" => { "rock" => "draw", "paper" => "loss", "scissors" => "win" },
            "paper" => { "rock" => "win", "paper" => "draw", "scissors" => "loss" },
            "scissors" => { "rock" => "loss", "paper" => "win", "scissors" => "draw" }
        }
        @cpu_choice = ["rock","paper","scissors"].sample
        @result = rps_table[@user_choice][@cpu_choice]
    end
end