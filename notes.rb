ALL OF THIS TAKES PLACE INSIDE THE TASK BLOCK IN THE RAKE FILE
api call w/ ruby

api call results >> new_custom_post_array

new_custom_post_array.each do |post|
  if post.created_at > last_send_task_datetime
    ~send twilio message~
    return
  end
end
