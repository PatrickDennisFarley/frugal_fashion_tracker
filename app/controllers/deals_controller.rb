require 'redd'
require 'date'
require 'pry'

class DealsController < ApplicationController
  def index
    render template: 'static_pages/index'
  end
end
