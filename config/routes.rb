Rails.application.routes.draw do
  resources :rooms
  resources :messages
  resources :users

  #List of users
  # get '/users', to to: 'users#index'

  # Auth
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
