import React, {Component } from 'react';
import { Link } from 'react-router';
import DealTile from '../components/DealTile';

class AllPostsIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deals: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/posts/all_posts')
    .then(response => response.json())
    .then(body => {
      this.setState({ deals: body.sales})
    })
  }

  render() {
    let deals = this.state.deals.map(deal => {
      return(
        <DealTile
          key={deal.id}
          title={deal.title}
          url={deal.url}
          created={deal.created}
          link_flair={deal.link_flair_text}
        />
      )
    })

    return (
      <div className="tile-box">
        <div className="row">
          <ul className="menu horizontal">
            <li><Link className="sub-menu-text" to="/deals">All Deals</Link></li>
            <li><Link className="sub-menu-text" to="/reviews">All Reviews</Link></li>
            <li><Link className="sub-menu-text" to="/discussions">All Discussions</Link></li>
          </ul>
        </div>
        <h1>All Posts</h1>
        {deals}
      </div>
    )
  }
}

export default AllPostsIndexContainer;
