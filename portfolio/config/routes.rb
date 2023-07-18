Rails.application.routes.draw do
  root 'root#index'

  get '/posts', to: 'posts#index'
  get '/posts/:id', to: 'posts#show'

  get '/contact', to: 'contact#index'
  post '/contact', to: 'contact#create'

  match '/404', to: 'errors#not_found', via: :all
  match '/500', to: 'errors#internal_server_error', via: :all
end
