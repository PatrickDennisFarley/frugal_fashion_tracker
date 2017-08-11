require 'twilio-ruby'
require 'pry'
require_relative '../../app/models/custom_posts.rb'

class SendNotification < Thor
  desc "send_notification", "notifies users by text when they have a new sale"

  def send_notification
    require File.expand_path("config/environment.rb")
    twilio_account_sid=ENV["TWILIO_ACCOUNT_SID"]
    twilio_auth_token=ENV["TWILIO_AUTH_TOKEN"]
    User.all.each { |user|
      binding.pry
      if CustomPosts.latest_custom_post > (Time.now.to_i - 86400)
        @client = Twilio::REST::Client.new(twilio_account_sid, twilio_auth_token)
        @client.messages.create({
          :from => "+12408984715",
          :to => "#{user.phone_number}",
          body: "hi #{user.username}! There are new deals for your keywords! Check them out now: https://frugal-fashion-tracker.herokuapp.com/custom_posts"
        })
      end
    }
  end
end
