require 'redd'
require 'date'
require 'pry'

class DiscussionsController < ApplicationController
  def index
    render template: 'static_pages/index'
  end
end
