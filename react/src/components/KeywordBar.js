import React, { Component } from 'react';
import { Link } from 'react-router';

class KeywordBar extends Component {
  constructor(props) {
    super(props);
    this.liveUpdate = this.liveUpdate.bind(this);
  }



  liveUpdate(event) {
    this.props.handleChange(event.target.value)
  }

  render() {
    return(
      <form onSubmit={this.props.handleSubmit}>
        <label>
          Add Keyword (one at a time):
          <input type="text" value={this.props.query} onChange={this.liveUpdate}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default KeywordBar;
