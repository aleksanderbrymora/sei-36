Rails.application.routes.draw do
  root :to => 'cars#index'
  resources :brands
  resources :cars
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
