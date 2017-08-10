[ ![Codeship Status for PatrickDennisFarley/frugal_fashion_tracker](https://app.codeship.com/projects/e8ded690-5dac-0135-c5eb-1a2b288d7643/status?branch=master)](https://app.codeship.com/projects/238277)
![Code Climate](https://codeclimate.com/github/PatrickDennisFarley/frugal_fashion_tracker.png)

# README

<h1>Frugal Fashion Tracker</h1>
<h2>Custom Flash Sale Tracker</h2>

<h5>Introduction</h5>
<p>Frugal Fashion Tracker is a great way to keep track of flash sales and deals for your favorite brands.</p>

<h5>Features</h5>
<ul>
<li>Users can create and update their own personal account.</li>
<li>Users can sign in/out of their account</li>
<li>Users can optionally add a profile picture to their account.</li>
<li>Users can view all posts or filter by all deals/discussions/reviews.</li>
<li>Users can add custom brand keywords.</li>
<li>Users can view customized result pages with only posts relating to their chosen keywords.</li>
<li>Users can edit reviews they have created.</li>
<li>Users can upvote or downvote individual reviews based on helpfulness.</li>
<li>Users are notified via email of any upvote/downvote activity on reviews they have posted.</li>
<li>Admins can delete any review.</li>
</ul>




<h5>Technologies</h5>
<ul>
<li>Backend: Rails 5.1.2</li>
<li>Frontend: React.js and Embedded Ruby</li>
<li>User Auth: Devise</li>
<li>Image Uploader: CarrierWave</li>
<li>Image Hosting: Amazon Web Services</li>
<li>Styling: Foundation</li>
<li>Database: Postgres</li>
<li>Testing: RSpec, Capybara, Jasmine, Karma, Enzyme</li>
</ul>

<h5>To run this app on your local machine</h5>
<ul>
<li>Install Ruby.2.3.3</li>
<li>In a terminal, run `git clone https://github.com/PatrickDennisFarley/frugal_fashion_tracker.git`</li>
<li>Navigate to the project's root directory with `cd frugal_fashion_tracker`</li>
<li>Run `bundle install && npm install && rake db:setup`</li>
<li>In terminal, run `rails s`</li>
<li>In another terminal window, run  `npm start`</li>
<li>Visit <a href='http://localhost:3000/'>http://localhost:3000/</a> in your browser.</li>
</ul>
