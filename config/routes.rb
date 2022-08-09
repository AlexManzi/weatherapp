Rails.application.routes.draw do
  resources :days
  resources :hours
  resources :cities
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get "/showDaysByCityName", to:"days#showByCityName"
  get "/showHoursByCityName", to:"hours#showByCityName"
  get "/showCityByCityName", to:"cities#showByCityName"

end
