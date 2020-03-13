Rails.application.routes.draw do
  root :to => 'pages#welcome'
  resources :users, :only => [:new, :create, :index]

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'

  resources :mixtapes, :only => [:new, :create]
end
