Rails.application.routes.draw do
  root :to => 'films#index'
  resources :directors
  resources :films
end
