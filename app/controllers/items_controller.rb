class ItemsController < ApplicationController
    before_action :authenticate_user!
    before_action :find_event, only: [:index, :create]
    def index
        @items = policy_scope(Item).where(event: @event)

    end

   def update
     @item =Item.find(params[:id])
        @event = @item.event
        authorize @item
        @item.user = current_user
        @item.save
        respond_to do |format|
        format.js { render 'events/update.js' }
        end
    end

    def create
     @item =Item.new(item_params)
     authorize @item
     @item.event = @event
     @item.save
     respond_to do |format|
       format.js { render 'events/update.js' }
     end
    end

    def destroy
      @item =Item.find(params[:id])
      authorize @item
      @event = @item.event
      @item.destroy
      respond_to do |format|
        format.js { render 'events/update.js' }
      end
    end
 

    private

    def item_params
        params.require(:item).permit(:name)
    end
    def find_event
        @event = Event.find(params[:event_id])
    end


end
