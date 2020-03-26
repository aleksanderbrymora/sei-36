Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
root :to => 'mountains#index'
get '/mountains' => 'mountains#index'
get '/mountains/new' => 'mountains#new', :as => 'new_mountain'
  post '/mountains' => 'mountains#create'
  get '/mountains/:id' => 'mountains#show', :as => 'mountain'
  get '/mountains/:id/edit' => 'mountains#edit', :as => 'edit_mountain'
  post '/mountains/:id' => 'mountains#update'
  delete '/mountains/:id' => 'mountains#destroy'
end
