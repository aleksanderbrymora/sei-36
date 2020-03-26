Rails.application.routes.draw do
  root :to => 'pages#home'

  get '/balls' => 'balls#game'
  get '/balls/result' => 'balls#result'


  get '/number' => 'number#game'
  get '/number/result' => 'number#result'

  get '/rock' => 'rock#game'
  get '/rock/results' => 'rock#result'
end
