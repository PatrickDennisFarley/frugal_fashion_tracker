import React, {Component } from 'react';
import { Link } from 'react-router';
import DealTile from '../components/DealTile';
import KeywordBar from '../components/KeywordBar';

class CustomDealsIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deals: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/posts/custom_deals',{credentials: 'same-origin' })
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
            <li><Link className="sub-menu-text" to="/custom_posts">Custom Posts</Link></li>
            <li><Link className="sub-menu-text" to="/custom_reviews">Custom Reviews</Link></li>
            <li><Link className="sub-menu-text" to="/custom_discussions">Custom Discussions</Link></li>
          </ul>
        </div>
        <h1>Custom Deals Page</h1>
        <KeywordBar />
        {deals}
      </div>
    )
  }
}

export default CustomDealsIndexContainer;
