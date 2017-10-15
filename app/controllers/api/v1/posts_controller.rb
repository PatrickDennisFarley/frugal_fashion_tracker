require 'redd'
require 'pry'

class Api::V1::PostsController < ApplicationController
  def all_posts

    session = Redd.it(
       user_agent: ENV["USER_AGENT"],
       client_id:  ENV["CLIENT_ID"],
       secret:     ENV["SECRET"],
       username:   ENV["USERNAME"],
       password:   ENV["PASSWORD"]
    )

    sales = session.subreddit('frugalmalefashion').new
    sales_array = sales.to_ary
    sales_hashes_array = []
    sales_array.each do |sale|
      sale_hash = {title: sale.title, url: sale.url, created: sale.created, link_flair_text: sale.link_flair_text}
      sales_hashes_array << sale_hash
    end
    @all_posts = {sales: sales_hashes_array}
    binding.pry
    render json: @all_posts
  end

  def custom_deals
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
        if sale.link_flair_text == "[Deal/Sale]"
          sale_hash = {title: sale.title, url: sale.url, created: sale.created, link_flair_text: sale.link_flair_text}
          @sales_hashes_array << sale_hash
        end
      end
    end
    @sorted_sales = @sales_hashes_array.sort_by { |sale| sale[:created]}.reverse
    @custom_deals = {sales: @sorted_sales}
    render json: @custom_deals
  end

  def custom_discussions
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
        if sale.link_flair_text == "[Discussion]"
          sale_hash = {title: sale.title, url: sale.url, created: sale.created, link_flair_text: sale.link_flair_text}
          @sales_hashes_array << sale_hash
        end
      end
    end
    @sorted_sales = @sales_hashes_array.sort_by { |sale| sale[:created]}.reverse
    @custom_discussions = {sales: @sorted_sales}
    render json: @custom_discussions
  end

  def custom_posts
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
        sale_hash = {title: sale.title, url: sale.url, created: sale.created, link_flair_text: sale.link_flair_text}
        @sales_hashes_array << sale_hash
      end
    end
    @sorted_sales = @sales_hashes_array.sort_by { |sale| sale[:created]}.reverse
    @custom_posts = {sales: @sorted_sales}
    render json: @custom_posts
  end

  def custom_reviews
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
        if sale.link_flair_text == "[Review]"
          sale_hash = {title: sale.title, url: sale.url, created: sale.created, link_flair_text: sale.link_flair_text}
          @sales_hashes_array << sale_hash
        end
      end
    end
    @sorted_sales = @sales_hashes_array.sort_by { |sale| sale[:created]}.reverse
    @custom_review = {sales: @sorted_sales}
    render json: @custom_review
  end

  def deals
    session = Redd.it(
       user_agent: ENV["USER_AGENT"],
       client_id:  ENV["CLIENT_ID"],
       secret:     ENV["SECRET"],
       username:   ENV["USERNAME"],
       password:   ENV["PASSWORD"]
    )

    sales = session.subreddit('frugalmalefashion').new
    sales_array = sales.to_ary
    @sales_hashes_array = []
    sales_array.each do |sale|
      if sale.link_flair_text == "[Deal/Sale]"
        sale_hash = {title: sale.title, url: sale.url, created: sale.created, link_flair_text: sale.link_flair_text}
        @sales_hashes_array << sale_hash
      end
    end
    @sorted_sales = @sales_hashes_array.sort_by { |sale| sale[:created]}.reverse
    @all_deals = {sales: @sorted_sales}
    render json: @all_deals
  end

  def discussions
    session = Redd.it(
       user_agent: ENV["USER_AGENT"],
       client_id:  ENV["CLIENT_ID"],
       secret:     ENV["SECRET"],
       username:   ENV["USERNAME"],
       password:   ENV["PASSWORD"]
    )

    sales = session.subreddit('frugalmalefashion').new
    sales_array = sales.to_ary
    @sales_hashes_array = []
    sales_array.each do |sale|
      if sale.link_flair_text == "[Discussion]"
        sale_hash = {title: sale.title, url: sale.url, created: sale.created, link_flair_text: sale.link_flair_text}
        @sales_hashes_array << sale_hash
      end
    end
    @sorted_sales = @sales_hashes_array.sort_by { |sale| sale[:created]}.reverse
    @all_discussions = {sales: @sorted_sales}
    render json: @all_discussions
  end

  def reviews
    session = Redd.it(
       user_agent: ENV["USER_AGENT"],
       client_id:  ENV["CLIENT_ID"],
       secret:     ENV["SECRET"],
       username:   ENV["USERNAME"],
       password:   ENV["PASSWORD"]
    )

    sales = session.subreddit('frugalmalefashion').new
    sales_array = sales.to_ary
    @sales_hashes_array = []
    sales_array.each do |sale|
      if sale.link_flair_text == "[Review]"
        sale_hash = {title: sale.title, url: sale.url, created: sale.created, link_flair_text: sale.link_flair_text}
        @sales_hashes_array << sale_hash
      end
    end
    @sorted_sales = @sales_hashes_array.sort_by { |sale| sale[:created]}.reverse
    @all_reviews = {sales: @sorted_sales}
    render json: @all_reviews
  end
end
