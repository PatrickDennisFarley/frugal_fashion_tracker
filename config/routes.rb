Rails.application.routes.draw do
  devise_for :users

  root 'static_pages#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :deals
  resources :all_posts
  resources :reviews
  resources :discussions
  resources :custom_posts
  resources :custom_deals
  resources :custom_reviews
  resources :custom_discussions

  namespace :api do
    namespace :v1 do
      resources :posts do
        get 'all_posts', on: :collection
        get 'custom_deals', on: :collection
        get 'custom_reviews', on: :collection
        get 'custom_discussions', on: :collection
        get 'custom_posts', on: :collection
        get 'deals', on: :collection
        get 'discussions', on: :collection
        get 'reviews', on: :collection
      end
      resources :queries, only: [:create, :index]
    end
  end
end
