class User < ApplicationRecord
  has_many :user_criteria
  has_many :criteria, through: :user_criteria

  validates :username, presence: true
  validates :email, presence: true, email: true


  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
