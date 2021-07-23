class MessagesController < ApplicationController
  before_action :set_message, only: [:update, :destroy]
  before_action :authorize_request
  # GET /messages
  def index
    @messages = Message.where(room_id: params[:id])
    @room = Room.find(params[:id])
    if @room.includes(@current_user)
    render json: @messages
  end
  end

  # GET /messages/1
  # def show
  #   render json: @message
  # end

  # POST /messages
  def create
    @room = Room.find(params[:id])
    @message = Message.new(message_params)
    @message.user = @current_user
    @room.messages = @message
    if @message.save
      render json: @message, status: :created
    else
      render json: @message.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /messages/1
  def update
    if @current_user.messages.includes(@message)
      if @message.update(message_params)
        render json: @message
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
