class DashboardController < ApplicationController
  before_action :authenticate_user!

  def index

    @events_as_host = policy_scope(Event).where(user: current_user)
    if params[:filtering]
      @invitations_as_guest = policy_scope(Invitation).where(receiver_id: current_user, status: params[:filtering]).where.not(status: "declined").includes(:event)
    else
      @invitations_as_guest = policy_scope(Invitation).where(receiver_id: current_user).where.not(status: "declined").includes(:event)
    end

    @invitations_data = @invitations_as_guest.map do |invitation|
      [invitation.event_id, invitation.status]
    end

    @all_events = []
    @invitations_as_guest.each do |invitation|
      @all_events << invitation.event
    end

    if !params[:filtering] or params[:filtering].include?("hosting")
      @events_as_host.each do |event|
        @all_events << event
      end
    end

    @all_events_sorted = @all_events.sort_by { |event| event.scheduled_at }
    @created_ats = @all_events_sorted.group_by { |date| date.scheduled_at.to_date }

    if params[:filtering].present?
      @active = "display: flex;"
    elsif
      @active = "display: none;"
    end

  end
end
