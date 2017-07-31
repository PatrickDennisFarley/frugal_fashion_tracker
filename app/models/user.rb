class User < ApplicationRecord
  mount_uploader :profile_photo, ProfilePhotoUploader
  has_many :user_criteria
  has_many :criteria, through: :user_criteria

  validates :username, presence: true
  validates :email, presence: true, email: true

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
