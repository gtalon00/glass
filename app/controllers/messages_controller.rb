class MessagesController < ApplicationController
  before_action :set_message, only: [:update, :destroy]
  before_action :authorize_request
  # GET /messages
  
  def index
    @messages = Message.where(room_id: params[:room_id])
    @room = Room.find(params[:room_id])
    if @room.users.includes(@current_user)
    render json: @messages, include: :user
  end
  end

  # POST /messages
  def create
    @room = Room.find(params[:room_id])
    puts params[:room_id]
    @message = Message.new(message_params)
    @message.user = @current_user
    @message.room = @room
    if @message.save
      render json: @message, include: :user, status: :created
    else
      render json: @message.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /messages/1
  def update
    if @current_user.messages.includes(@message)
      if @message.update(message_params)
        render json: @message, include: :user
      else
        render json: @message.errors, status: :unprocessable_entity
      end
    end
  end  

  # DELETE /messages/1
  def destroy
    if @current_user.messages.includes(@message)
    @message.destroy
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_message
      @message = Message.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def message_params
      params.require(:message).permit(:context, :user_id, :room_id)
    end
end
