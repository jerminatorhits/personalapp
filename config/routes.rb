Rails.application.routes.draw do
  devise_for :admins
  root 'static_pages#home'
  get '/about', to: 'static_pages#about'
  get '/portfolio', to: 'static_pages#portfolio'
  get '/hobbies', to: 'static_pages#hobbies'
  match '/contacts', to: 'contacts#new', via: 'get'
  resources :contacts, only: [:new, :create]
  resources :posts

end
