require 'redd'
require 'date'
require 'pry'

class CustomDiscussionsController < ApplicationController
  def index
    render template: 'static_pages/index'
  end
end
