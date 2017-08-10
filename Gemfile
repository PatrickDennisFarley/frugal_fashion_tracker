source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'active_model_serializers'
gem 'middleware'
gem 'dotenv-rails'
gem 'redd'
gem 'twilio-ruby', '~> 5.1.0'
gem 'carrierwave'
gem 'devise'
gem 'mini_magick', '~> 4.3'
# gem 'rmagick', '~> 2.16.0'
gem 'fog'
gem 'fog-aws'
gem 'rails', '~> 5.1.2'
gem 'jquery-rails'
gem 'pg', '0.20.0'
gem 'puma', '~> 3.7'
gem 'sass-rails', '~> 5.0'
gem 'coffee-rails', '~> 4.2'
gem 'uglifier', '>= 1.3.0'
gem 'foundation-rails'
gem 'jbuilder', '~> 2.5'
gem 'rails-assets-foundation', source: 'https://rails-assets.org'

group :development, :test do
  gem 'sqlite3', '1.3.13'
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'pry-rails'
  gem 'capybara'
  gem 'rspec-rails'
  gem 'launchy'
  gem 'factory_girl'
  gem 'valid_attribute'
  gem 'shoulda-matchers', require: false
  gem 'webmock'
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  gem 'coveralls', require: false
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
