Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'pages#welcome'
  get '/hello' => 'pages#hello'
  get '/goodbye' => 'pages#goodbye'
  get '/welcome' => 'pages#welcome'
  get '/about' => 'pages#about'

  get '/auto/:color' => 'auto#color'
  get '/auto/:hp/:torque' => 'auto#engine'

  get '/funny' => 'pages#lol'
  get '/calc/:x/:y/:operator' => 'calc#calculate'
end
