Rails.application.routes.draw do
  get 'rock_paper_scissors/form'
  get 'rock_paper_scissors/result'
  root :to => 'page#main'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/eightball' => 'eightball#form'
  get '/eightball/result' => 'eightball#result'

  get 'rock_paper_scissors' => 'rock_paper_scissors#form'
  get 'rock_paper_scissors/result' => 'rock_paper_scissors#result'
end
