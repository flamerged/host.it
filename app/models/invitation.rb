class Invitation < ApplicationRecord
  belongs_to :event
  belongs_to :sender, class_name: "User"
  belongs_to :receiver, class_name: "User", optional: true

  validates :status, presence: true
  validates_format_of :receiver_email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i
end
