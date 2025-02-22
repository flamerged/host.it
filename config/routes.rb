Rails.application.routes.draw do
  devise_for :users
  root to: "pages#home"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :events, only: %i[show new create edit update destroy] do
    resources :invitations, only: %i[index create]
    resources :items, only: %i[index new create]
    resources :messages, only: :create
  end
  resources :items, only: %i[update destroy]
  resources :dashboard, only: [:index]
  resources :users, only: %i[show edit update new]
  get "/auth/spotify/callback", to: "users#spotify"
  resources :invitations, only: %i[update destroy]
  resources :messages, only: :destroy
end
