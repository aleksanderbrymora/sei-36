Rails.application.routes.draw do
  root :to => 'teams#index'
  resources :drivers
  resources :teams
end
