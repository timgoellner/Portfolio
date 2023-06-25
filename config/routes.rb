Rails.application.routes.draw do
  root 'root#index'

  get '/posts', to: 'posts#index'

  get '/contact', to: 'contact#index'
end
