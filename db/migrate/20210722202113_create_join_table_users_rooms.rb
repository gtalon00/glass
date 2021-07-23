class CreateJoinTableUsersRooms < ActiveRecord::Migration[6.1]
  def change
    create_join_table :users, :rooms do |t|

    end
  end
end
