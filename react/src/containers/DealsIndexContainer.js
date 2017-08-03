import React, {Component } from 'react';
import DealTile from '../components/DealTile';

class DealsIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deals: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/posts/deals')
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
            <li><a className="sub-menu-text" href="/all_posts">All Posts</a></li>
            <li><a className="sub-menu-text" href="/reviews">All Reviews</a></li>
            <li><a className="sub-menu-text" href="/discussions">All Discussions</a></li>
          </ul>
        </div>
        <h1>All Deals</h1>
        {deals}
      </div>
    )
  }
}

export default DealsIndexContainer;
