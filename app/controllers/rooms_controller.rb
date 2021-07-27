class RoomsController < ApplicationController
  before_action :authorize_request, only: [:index, :create]

  # GET /rooms
  def index
    @rooms = @current_user.rooms

    # @rooms = Room.joins(:users).where(users: {id: @current_user.id})
    # .joins(:users).group('rooms.id')
    # .select('rooms.*, COUNT(users.id) as user_count').group('rooms.id')
    #  .where(user_id: @current_user.id);

    # @rooms = Room.where(user: @current_user)

    render json: @rooms, include: :users
  end

  # POST /rooms
  def create
    @room = Room.new
    @second_user = User.find(params[:user_id])
    
    if @room.save
      @room.users = [@second_user, @current_user]
      render json: @room,  include: :users, status: :created 
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
    # def set_user 
    #   @user = 
    # end

    def room_params
      params.fetch(:room, {})
    end
end
