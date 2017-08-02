require 'redd'
require 'date'
require 'pry'

class AllPostsController < ApplicationController
  def index
    session = Redd.it(
      user_agent: 'Redd:FashionTexter:v1.0.0 (by /u/the4oclockhero)',
      client_id:  'ylDT9JmKnj76CA',
      secret:     'IWeJkCkF821w05gekSpUg0CPtaM',
      username:   'the4oclockhero',
      password:   'hv3kk444'
    )

    sales = session.subreddit('frugalmalefashion').hot

    @deals = []
    sales.each do |sale|
      @deals << sale
    end
  end
end
