import React, { Component } from 'react';
import { Link } from 'react-router';

class KeywordBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ query: event.target.value })
  }

  handleSubmit() {
    let payload = { body: this.state.query
    }
    fetch('/api/v1/queries', {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(responseData => {
      this.setState({ query: responseData.body})
    })
    .catch(
      console.log("There was an error")
    )
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        {this.state.query}
        <label>
          Add Keyword (one at a time):
          <input type="text" value={this.state.query} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default KeywordBar;
