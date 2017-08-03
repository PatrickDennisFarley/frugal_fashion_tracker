require 'redd'
require 'date'
require 'pry'

class CustomReviewsController < ApplicationController
  def index
    render template: 'static_pages/index'
  end
end
