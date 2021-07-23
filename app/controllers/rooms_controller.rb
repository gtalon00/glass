class RoomsController < ApplicationController
  before_action :authorize_request, only: :index

  # GET /rooms
  def index
    @rooms = Room.where(user_id: @current_user.id)

    render json: @rooms
  end

  # GET /rooms/1
  # def show
  #   render json: @room
  # end

  # POST /rooms
  def create
    @room = Room.new(room_params)
    
    if @room.save
      render json: @room, status: :created
    else
      render json: @room.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /rooms/1
  # def update
  #   if @room.update(room_params)
  #     render json: @room
  #   else
  #     render json: @room.errors, status: :unprocessable_entity
  #   end
  # end

  # DELETE /rooms/1
  def destroy
    @room = Room.where(user_id: @current_user.id)
    @room.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.

    # Only allow a list of trusted parameters through.
    def room_params
      params.fetch(:room, {})
    end
end
