import React, {Component } from 'react';
import { Link } from 'react-router';
// import RemoveKeyword from '../components/RemoveKeyword';

class KeywordContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keywords: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/queries',{credentials: 'same-origin' })
    .then(response => response.json())
    .then(body => {
      this.setState({ keywords: body.queries})
    })
  }

  render() {
    let keywords = this.state.keywords.map(keywords => {
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
            <li><Link className="sub-menu-text" href="/all_posts">All Posts</Link></li>
            <li><Link className="sub-menu-text" href="/deals">All Deals</Link></li>
            <li><Link className="sub-menu-text" href="/reviews">All Reviews</Link></li>
          </ul>
        </div>
        <h1>All Discussions</h1>
        {deals}
      </div>
    )
  }
}

export default KeywordContainer;
