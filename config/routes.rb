Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'web_push_notifications#index'

  post 'push', to: 'web_push_notifications#push'
end
