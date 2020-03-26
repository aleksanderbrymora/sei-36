Rails.application.routes.draw do
  root :to => 'directors#index'
  resources :directors
end
