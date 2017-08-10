import React, {Component } from 'react';
import { Link } from 'react-router';
import DealTile from '../components/DealTile';
import KeywordBar from '../components/KeywordBar';

class CustomReviewsIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deals: [],
      filteredDeals: [],
      query: ''
    }
    this.filterDealList = this.filterDealList.bind(this)
    this.handleAddKeyword = this.handleAddKeyword.bind(this)
    this.handleQueryChange = this.handleQueryChange.bind(this)
  }

  componentDidMount() {
    fetch('/api/v1/posts/custom_reviews',{credentials: 'same-origin' })
    .then(response => response.json())
    .then(body => {
      this.setState({ deals: body.sales, filteredDeals: body.sales })
    })
  }

  handleAddKeyword() {
    let payload = { body: this.state.query
    }
    fetch('/api/v1/queries', {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(responseData => {
      this.setState({ query: responseData.body })
    })
    .catch(
      console.log("There was an error")
    )
  }

  filterDealList(searchString) {
    let filteredDeals = [];

    this.state.deals.forEach(deal => {
      if(deal.title.toLowerCase().includes(searchString.toLowerCase())) {
        filteredDeals.push(deal);
      }
    })
    this.setState({filteredDeals: filteredDeals})
  }

  handleQueryChange (value) {
    this.setState({
      query: value
    })
    this.filterDealList(this.state.query)
  }

  render() {
    let deals = this.state.filteredDeals.map(deal => {
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
            <li><Link className="sub-menu-text" href="/custom_posts">Custom Posts</Link></li>
            <li><Link className="sub-menu-text" href="/custom_deals">Custom Deals</Link></li>
            <li><Link className="sub-menu-text" href="/custom_discussions">Custom Discussions</Link></li>
          </ul>
        </div>
        <h1>Custom Reviews Page</h1>
        <KeywordBar handleChange={this.handleQueryChange} handleSubmit={this.handleAddKeyword} query={this.state.query}/>
        <br/>
        {deals}
      </div>
    )
  }
}

export default CustomReviewsIndexContainer;
