import React from 'react';
import { Link } from 'react-router';

const DealTile = (props) => {

  return(
    <div>
      <div className="callout">
        <div className="row">
          <div className="small 10 columns">
            <h3>{props.title}</h3>
            <a className="deal-text" href={props.url}>{props.url}</a>
            <p>Link Flair: {props.link_flair}</p>
            <p>Created at: {props.created}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DealTile;
