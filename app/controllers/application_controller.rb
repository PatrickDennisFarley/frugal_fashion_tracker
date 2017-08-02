class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?

  def after_sign_in_path_for(user)
    all_posts_path
  end

  def after_update_path_for(user)
    all_posts_path(user)
  end

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up,
      keys: [:username, :profile_photo, :phone_number])
    devise_parameter_sanitizer.permit(:account_update,
      keys: [:username, :profile_photo, :phone_number])
  end
end
