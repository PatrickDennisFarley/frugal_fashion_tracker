require 'redd'
require 'date'
require 'pry'

class CustomPostsController < ApplicationController
  def index
    render template: 'static_pages/index'
  end
end
