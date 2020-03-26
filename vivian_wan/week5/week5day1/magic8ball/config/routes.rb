Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

get '/' =>'pages#home'
get '/result' => 'pages#result'
get '/form' => 'pages#form'


get '/secretnumber' => 'secretnumber#form'
get '/secretnumber/result' => 'secretnumber#result'

get '/secretnumber/random' => 'secretnumber#random'

get '/secretnumber/winlose' => 'secretnumber#winlose'


end
