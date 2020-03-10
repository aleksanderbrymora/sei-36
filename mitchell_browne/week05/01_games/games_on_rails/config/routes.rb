Rails.application.routes.draw do
  root :to => 'games#home'
  get '/games/:variable' => 'games#rabbit'

  get '/magic' => 'magic#home'
  get '/magic/result' => 'magic#result'

  get '/secret' => 'secret#home'
  get '/secret/result' => 'secret#result'

  get '/rps' => 'rps#home'
  get '/rps/:throw' => 'rps#play'
end
