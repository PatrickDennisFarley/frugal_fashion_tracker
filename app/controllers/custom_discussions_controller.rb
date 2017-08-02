require 'redd'
require 'date'
require 'pry'

class CustomDiscussionsController < ApplicationController
  def index
    session = Redd.it(
      user_agent: 'Redd:FashionTexter:v1.0.0 (by /u/the4oclockhero)',
      client_id:  'ylDT9JmKnj76CA',
      secret:     'IWeJkCkF821w05gekSpUg0CPtaM',
      username:   'the4oclockhero',
      password:   'hv3kk444'
    )

    @keywords = ["Finish Line", "J.Crew", "Uniqlo"]

    @discussions = []
    @keywords.each do |keyword|
      sales = session.subreddit('frugalmalefashion').search(keyword, sort: :new)
      sales.each do |sale|
        if sale.link_flair_text == "[Discussion]"
          @discussions << sale
        end
      end
    end
  end
end
