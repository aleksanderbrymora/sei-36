Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'pages#home'

  get '/magic_ball' => 'magic_ball#form'
  get '/magic_ball/result' => 'magic_ball#result'

  get '/secret_number' => 'secret_number#form'
  get '/secret_number/:number' => 'secret_number#result'


end
