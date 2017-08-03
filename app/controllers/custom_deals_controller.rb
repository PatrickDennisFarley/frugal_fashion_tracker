require 'redd'
require 'date'
require 'pry'

class CustomDealsController < ApplicationController
  def index
    render template: 'static_pages/index'
  end
end
