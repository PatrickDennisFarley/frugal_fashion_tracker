import React, { Component } from 'react';
import { Link } from 'react-router';
import RemoveKeyword from '../components/RemoveKeyword';

class KeywordsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keywords: []
    }
    this.handleDeleteKeyword = this.handleDeleteKeyword.bind(this)
  }

  handleDeleteKeyword(id) {
    let keywordsArray = []
    fetch(`/api/v1/queries/${id}`, {
      credentials: 'same-origin',
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(body => {
      body.forEach(entry => {
        keywordsArray.push(entry)
      })
      this.setState({ keywords: keywordsArray })
    })
  }

  componentDidMount() {
    let keywordsArray = []
    fetch('/api/v1/queries',{credentials: 'same-origin' })
    .then(response => response.json())
    .then(body => {
      body.forEach(entry => {
        keywordsArray.push(entry)
      })
      this.setState({ keywords: keywordsArray })
    })
  }

  render() {
    let keywords = this.state.keywords.map(keyword => {
      let handleClick = () => { this.handleDeleteKeyword(keyword.id) }
      return(
        <div key={keyword.id}>
          <h3>{keyword.body}</h3>
          <div>
            <RemoveKeyword
              handleClick={handleClick}
            />
          </div>
        </div>

      )
    })

    return(
      <div className="tile-box">
        <div className="row">
          <div className="small 10 columns">
            <h1>Your Keywords</h1>
            <br/>
            {keywords}
          </div>
        </div>
      </div>
    )
  }
}

export default KeywordsContainer;
