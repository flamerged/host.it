class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home]
  skip_after_action :verify_authorized, :verify_policy_scoped

  def home
    @event = Event.new
  end
end
