class EventsController < ApplicationController
  before_action :authenticate_user!
  before_action :find_event, only: [:show, :edit, :update, :destroy]

  def show
    authorize @event
    @item = Item.new
    @invitation = Invitation.new
    @invitations = @event.invitations.order(created_at: :desc)
    @message = Message.new
    @marker = {
      lat: @event.latitude,
      lng: @event.longitude,
      image_url: helpers.asset_url('marker.svg')
    };
  end

  def new
    @event = Event.new
    authorize @event
  end

  def create
    @event = Event.new(strong_params)
    @event.user = current_user
    @event.chatroom = Chatroom.new
    authorize @event
    if @event.save
      redirect_to event_path(@event)
      flash.alert = "Event created"
    else
      render :new
    end
  end

  def edit
    authorize @event
  end

  def update
    authorize @event
    @event.update(strong_params)
    if @event.update(strong_params)
      redirect_to event_path(@event)
      flash.alert = "Event updated"
    else
      render :edit
    end
  end

  def destroy
    authorize @event
    if @event.destroy!
      redirect_to dashboard_index_path
      flash.alert = "Event deleted"
    else
      render :show
      flash.alert = "Event could not be deleted"
    end
  end

  private

  def find_event
    @event = Event.find(params[:id])
  end

  def strong_params
    params.require(:event).permit(:title, :scheduled_at, :location, :description, :banner, :spotify_playlist)
  end
end
