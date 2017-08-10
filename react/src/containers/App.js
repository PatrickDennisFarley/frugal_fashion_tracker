import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import AllPostsIndexContainer from './AllPostsIndexContainer';
import CustomDealsIndexContainer from './CustomDealsIndexContainer';
import CustomPostsIndexContainer from './CustomPostsIndexContainer';
import CustomReviewsIndexContainer from './CustomReviewsIndexContainer';
import CustomDiscussionsIndexContainer from './CustomDiscussionsIndexContainer';
import DealsIndexContainer from './DealsIndexContainer';
import DiscussionsIndexContainer from './DiscussionsIndexContainer';
import ReviewsIndexContainer from './ReviewsIndexContainer';
import KeywordsContainer from './KeywordsContainer'


const App = props => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={AllPostsIndexContainer}/>
      <Route path='/all_posts' component={AllPostsIndexContainer}/>
      <Route path='/custom_deals' component={CustomDealsIndexContainer}/>
      <Route path='/custom_discussions' component={CustomDiscussionsIndexContainer}/>
      <Route path='/custom_posts' component={CustomPostsIndexContainer}/>
      <Route path='/custom_reviews' component={CustomReviewsIndexContainer}/>
      <Route path='/deals' component={DealsIndexContainer}/>
      <Route path='/discussions' component={DiscussionsIndexContainer}/>
      <Route path='/reviews' component={ReviewsIndexContainer}/>
      <Route path='/keywords' component={KeywordsContainer}/>
    </Router>
  )
}

export default App;
