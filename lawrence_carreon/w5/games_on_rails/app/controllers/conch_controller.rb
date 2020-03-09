class ConchController < ApplicationController
    def ask
    end

    def answer
        @user_question = params[:question]
        responses = [
            "Maybe someday.",
            "Nothing.",
            "Neither.",
            "Follow the seahorse.",
            "I don't think so.",
            "No.",
            "Yes.",
            "Try asking again."
        ]
        @conch_response = responses.sample
    end
end

