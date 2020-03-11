Rails.application.routes.draw do
    root :to => 'singers#index'
    get '/singers' => 'singers#index'
    get '/singers/new' => 'singers#new', :as => 'new_singer'
    post '/singers' => 'singers#create'
    get '/singers/:id' => 'singers#show', :as => 'singer'
    get '/singers/:id/edit' => 'singers#edit', :as => 'edit_singer'
    post '/singers/:id' => 'singers#update'
    delete '/singers/:id' => 'singers#destroy'
end
