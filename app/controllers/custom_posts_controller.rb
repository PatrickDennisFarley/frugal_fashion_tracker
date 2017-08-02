require 'redd'
require 'date'
require 'pry'

class CustomPostsController < ApplicationController
  def index
    session = Redd.it(
      user_agent: 'Redd:FashionTexter:v1.0.0 (by /u/the4oclockhero)',
      client_id:  'ylDT9JmKnj76CA',
      secret:     'IWeJkCkF821w05gekSpUg0CPtaM',
      username:   'the4oclockhero',
      password:   'hv3kk444'
    )

    @keywords = ["J.Crew", "Uniqlo"]

    @deals = []
    @keywords.each do |keyword|
      sales = session.subreddit('frugalmalefashion').search(keyword, sort: :new)
      sales.each do |sale|
        @deals << sale
      end
      @deals.sort! { |a, b| b.created_utc <=> a.created_utc }
    end
  end
end
