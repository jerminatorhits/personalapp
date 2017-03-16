Rails.application.routes.draw do
  devise_for :admins
  root 'static_pages#home'
  get '/about', to: 'static_pages#about'
  get '/portfolio', to: 'static_pages#portfolio'
  get '/passions', to: 'static_pages#passions'
  match '/contact', to: 'contacts#new', via: 'get'
  resources :contacts, path: "contact", only: [:new, :create]
  resources :posts

end
