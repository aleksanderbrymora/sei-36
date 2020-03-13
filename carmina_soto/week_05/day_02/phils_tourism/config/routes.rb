Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'beaches#index'
  get '/beaches' => 'beaches#index' #display all beaches
  get '/beaches/new' => 'beaches#new' #Add beach form
  post '/beaches' => 'beaches#create' #Creation of beach
  get '/beaches/:id' => 'beaches#show', :as => 'beach' #show beach details
  get '/beaches/:id/edit' => 'beaches#edit', :as => 'edit_beach' #edit beach form
  post '/beaches/:id' => 'beaches#update' #update beach details
  delete '/beaches/:id' => 'beaches#destroy'
end
