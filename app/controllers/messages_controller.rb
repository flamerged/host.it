class MessagesController < ApplicationController
  def create
    @event = Event.find(params[:event_id])
    message = Message.new(strong_params)
    message.chatroom = @event.chatroom
    message.user = current_user
    authorize message
    if message.save
      ChatroomChannel.broadcast_to(
        message.chatroom,
        render_to_string(partial: "messages/message", locals: { message: message })
      )
    else 
      render "events/show"
      flash.alert = "Error: Message could not be sent."
    end
  end

  def destroy
    message =  Message.find(params[:id])
    message.destroy
  end

  def strong_params
    params.require(:message).permit(:content)
  end
end
