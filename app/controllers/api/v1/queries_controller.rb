class Api::V1::QueriesController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index

  end

  def create
    data = JSON.parse(request.body.read)
    if Query.exists?(user_id: current_user.id, body: data["body"])
      @query = Query.where(user_id: current_user.id, body: data["body"])
      render json: @query
    else
      query = Query.create(user_id: current_user.id, body: data["body"])
      render json: query
    end
  end

  private

  def query_params
    params.require(:query).permit(:user_id, :body)
  end
end
