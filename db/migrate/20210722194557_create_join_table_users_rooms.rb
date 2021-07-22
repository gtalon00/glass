class CreateJoinTableUsersRooms < ActiveRecord::Migration[6.1]
  def change
    create_join_table :users, :rooms do |t|
      t.references :user, null: false, foreign_key: true
      t.references :room, null: false, foreign_key: true
    end
  end
end
