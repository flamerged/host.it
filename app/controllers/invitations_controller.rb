class InvitationsController < ApplicationController
  before_action :authenticate_user!
  before_action :find_invitation, only: [:update, :destroy]
  before_action :find_event, only: [:index, :create]

  def index
    @invitations = Invitation.where(event: @event)
  end

  def update
    authorize @invitation
    @invitation.status = params[:status]
    if @invitation.save
      
    else
      flash.alert = "Error changing invitation status"
    end
  end

  def create
    @invitation = Invitation.new(strong_params)
    authorize @invitation
    @invitation.sender = current_user
    @invitation.event = @event
    @invitation.receiver = User.find_by(email: @invitation.receiver_email)
    @invited_already = Invitation.where(event: @event).find_by(receiver_email: @invitation.receiver_email)
    if @invited_already
      render json: { success: false, errors: @invitation.errors.messages }, status: :unprocessable_entity 
    elsif @invitation.receiver_email == current_user.email
      render json: { success: false, errors: @invitation.errors.messages }, status: :unprocessable_entity 
    else
      if @invitation.save
        render json: { invitation: @invitation }
      else
        render json: { success: false, errors: @invitation.errors.messages }, status: :unprocessable_entity 
      end
    end
  end

  def destroy
    @invitation = Invitation.find(params[:id])
    event = @invitation.event
    authorize @invitation
    if @invitation.destroy
      # redirect_to event_path(event)
      # flash.alert = "Invitation deleted"
    else
      redirect_to event_path(event)
      flash.alert = "Invitation deletion failed"
    end
  end

  private

  def find_invitation
    @invitation = Invitation.find(params[:id])
  end

  def find_event
    @event = Event.find(params[:event_id])
  end

  def strong_params
    params.require(:invitation).permit(:status, :receiver_email)
  end
end
