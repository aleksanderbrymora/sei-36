Rails.application.routes.draw do
  # Home Page
	root :to => 'pages#home'

	# Magic 8 ball
	get '/magic/form' => 'magic#form'
	get '/magic/result' => 'magic#result'
end
