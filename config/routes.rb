Rails.application.routes.draw do
  resources :rooms, except: [:show, :update]
  # get '/user/:user_id/rooms'
  resources :messages, except: [:index, :create, :show]
  get '/room/:room_id/messages', to: 'messages#index'
  post '/room/:room_id/messages', to: 'messages#create'
  resources :users, except: :show


  #List of users
  # get '/users', to to: 'users#index'

  # Auth
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
