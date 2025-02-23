ActiveSupport.on_load(:devise_controller) do
  skip_after_action :verify_authorized, raise: false
  skip_after_action :verify_policy_scoped, raise: false
end
