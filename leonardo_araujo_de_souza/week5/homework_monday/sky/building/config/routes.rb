Rails.application.routes.draw do
  root :to => 'building#index'
  get '/buildings' => 'buildings#index'
  get '/buildings/new' => 'buildings#new', :as => 'new_building'
  post '/buildings' => 'buildings#create'
  get '/buildings/:id' => 'buildings#show', :as => 'building'
  get '/buildings/:id/edit' => 'buildings#edit', :as => 'edit_building'
  post '/buildings/:id' => 'buildings#update'
  delete '/buildings/:id' => 'buildings#destroy'
end
