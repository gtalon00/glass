class RoomsController < ApplicationController
  before_action :authorize_request, only: :index

  # GET /rooms
  def index
    @rooms = Room.where(user_id: @current_user.id)

    render json: @rooms
  end

  # POST /rooms
  def create
    @room = Room.new(room_params)
    
    if @room.save
      render json: @room, status: :created
    else
      render json: @room.errors, status: :unprocessable_entity
    end
  end

  # DELETE /rooms/1
  def destroy
    @room = Room.where(user_id: @current_user.id)
    @room.destroy
  end

  private
    # Only allow a list of trusted parameters through.
    def room_params
      params.fetch(:room, {})
    end
end
