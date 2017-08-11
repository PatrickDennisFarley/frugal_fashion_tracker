require 'redd'

class CustomPosts
  def self.latest_custom_post
    session = Redd.it(
      user_agent: ENV["USER_AGENT"],
      client_id:  ENV["CLIENT_ID"],
      secret:     ENV["SECRET"],
      username:   ENV["USERNAME"],
      password:   ENV["PASSWORD"]
    )

    queries = Query.where(user_id: current_user.id)
    @keywords = []
    queries.each do |query|
      @keywords << query.body
    end
    @sales_hashes_array = []
    @keywords.each do |keyword|
      sales = session.subreddit('frugalmalefashion').search(keyword, sort: :new)
      sales_array = sales.to_ary
      sales_array.each do |sale|
        sale_hash = { title: sale.title, url: sale.url, created: sale.created, link_flair_text: sale.link_flair_text }
        @sales_hashes_array << sale_hash
      end
    end
    @sorted_sales = @sales_hashes_array.sort_by { |sale| sale[:created] }.reverse
    return @sorted_sales.first[:created]
  end
end
