Rails.application.routes.draw do
  root 'root#index'

  get '/posts', to: 'posts#index'
  get '/posts/:id', to: 'posts#show'

  get '/contact', to: 'contact#index'
  post '/contact', to: 'contact#create'
end
