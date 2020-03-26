Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'pages#welcome'    # get '/' => 'pages#welcome'
  get '/hello' => 'pages#hello'
  get '/goodbye' => 'pages#goodbye'
  get '/welcome' => 'pages#welcome'

get '/calc' => 'cacl#calculate'
  get '/auto/:color' => 'auto#color'
  get '/funny' => 'pages#lol'
end
