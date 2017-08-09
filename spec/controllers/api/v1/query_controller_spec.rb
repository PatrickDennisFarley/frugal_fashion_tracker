require "rails_helper"

RSpec.describe Api::V1::QueriesController, type: :controller do
  include Devise::Test::ControllerHelpers
  describe "POST#create" do
    it "adds a new keyword when a user enters one" do
      user = User.create(username: "testuser", email: "test@gmail.com", password: "123456", phone_number: "1234567890")
      sign_in user
      
      post_json = { body: 'shoes'}

      expect{ post(:create, params: post_json)}.to change{ Query.count }.by 1
    end
  end
end
