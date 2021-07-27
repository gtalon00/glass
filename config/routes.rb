Rails.application.routes.draw do
  resources :rooms, except: [:show, :update]
  post '/rooms/:user_id', to: 'rooms#create'
  # get '/user/:user_id/rooms'
  resources :messages, except: [:index, :create, :show]
  get '/rooms/:room_id/messages', to: 'messages#index'
  post '/rooms/:room_id/messages', to: 'messages#create'
  resources :users, except: :show

  # Auth
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
