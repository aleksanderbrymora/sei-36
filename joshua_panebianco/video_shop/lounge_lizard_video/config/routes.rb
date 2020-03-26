Rails.application.routes.draw do
  # get 'videos/index'
  # get 'videos/new'
  # get 'videos/edit'
  # get 'videos/show'

  # root :to => "videoss#index" `resources :videos`

  # get "/videos/new" => "videos#new"
  # post "/videos" => "videos#create"
  # get "/videos" => "videos#index"
  #
  # get "/videos/:id" => "videos#show", as: "videos"
  #
  # get "/videos/:id/edit" => "videos#edit", as: "video_edit"
  # post "/videos/:id" => "videos#update"
  #
  # get "/videos/:id/delete" => "videos#delete", as: "video_destroy"

  root :to => 'videos#index'
  resources :videos

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
