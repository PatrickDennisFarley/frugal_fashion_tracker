require 'rails_helper'

RSpec.describe Query, type: :model do
  it { should have_valid(:body).when('J.Crew', 'Nike') }
  it { should_not have_valid(:body).when(nil, '') }
end
