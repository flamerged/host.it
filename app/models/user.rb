class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable

  has_many :invitations_as_sender, class_name: "Invitation", foreign_key: "sender_id"
  has_many :invitations_as_receiver, class_name: "Invitation", foreign_key: "receiver_id"
  has_many :events
  has_many :items
  serialize :spotify_login

  has_one_attached :avatar

  after_create :get_invitations

  def full_name
    "#{self.first_name} #{self.last_name}"
  end

  def get_invitations
    invitations = Invitation.where(receiver_email: self.email)
    invitations.each do |invitation|
      invitation.receiver_id = self.id
      invitation.save!
    end
  end
end
