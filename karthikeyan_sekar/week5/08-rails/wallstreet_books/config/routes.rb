Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/' => 'pages#home'
  get '/stocks' => 'stocks#forms'
  get '/stocks/result' => 'stocks#result'
end
