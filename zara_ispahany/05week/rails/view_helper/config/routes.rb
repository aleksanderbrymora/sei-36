Rails.application.routes.draw do
  root :to => 'pages#home'
  get '/microsoft-numb3rs' => 'pages#numbers', :as => :numbers # numbers_path
  get '/text' => 'pages#text'
  get '/assets' => 'pages#assets'
  get '/url' => 'pages#url'
end
