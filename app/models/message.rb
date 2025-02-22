class Message < ApplicationRecord
  belongs_to :chatroom
  belongs_to :user
  has_one :event, through: :chatroom

  validates :content, presence: true
end
