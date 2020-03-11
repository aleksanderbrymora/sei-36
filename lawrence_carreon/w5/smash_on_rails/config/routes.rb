Rails.application.routes.draw do
  root :to => "pages#index"
  get "/pages/search" => "pages#search"
  resources :characters
  resources :specials
  resources :games
end
