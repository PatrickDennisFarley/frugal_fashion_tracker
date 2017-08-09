class Api::V1::QueriesController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    @query = Query.where(user_id: current_user.id)
    render json: @query
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

  def destroy
   Query.destroy(params[:id])
   @query = Query.where(user_id: current_user.id)
   render json: @query
  end

  private

  def query_params
    params.require(:query).permit(:user_id, :body)
  end
end
