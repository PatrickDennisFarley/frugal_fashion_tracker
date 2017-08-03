require 'redd'
require 'date'
require 'pry'

class ReviewsController < ApplicationController
  def index
    render template: 'static_pages/index'
  end
end
