Rails.application.routes.draw do
  root :to => 'customers#index'
  resources :customers
  resources :orders
end
