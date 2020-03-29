Rails.application.routes.draw do
  root :to => "pages#home"

  get "/conch" => "conch#ask"
  get "/conch/answer" => "conch#answer"

  get "/secret_number" => "number#guess"
  get "/secret_number/attempt" => "number#attempt"
  get "/secret_number/wrong" => "number#wrong"
  get "/secret_number/correct" => "number#correct"

  get "/rps" => "rps#choose"
  get "/rps/result/:choice" => "rps#result"
end
