class User < ApplicationRecord
  has_secure_password
  has_many :messages
  has_many :users_rooms
  has_many :rooms, through: :users_rooms

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }
end 