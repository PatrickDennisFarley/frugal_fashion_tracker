import React, {Component } from 'react';
import DealTile from '../components/DealTile';

class CustomDiscussionsIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deals: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/posts/custom_discussions')
    .then(response => response.json())
    .then(body => {
      this.setState({ deals: body.deals})
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
            <li><a className="sub-menu-text" href="/custom_posts">Custom Posts</a></li>
            <li><a className="sub-menu-text" href="/custom_deals">Custom Deals</a></li>
            <li><a className="sub-menu-text" href="/custom_reviews">Custom Reviews</a></li>
          </ul>
        </div>
        <h1>Custom Discussions Page</h1>
        {deals}
      </div>
    )
  }
}

export default CustomDiscussionsIndexContainer;
