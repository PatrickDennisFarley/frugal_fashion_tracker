import React from 'react';
import { Link } from 'react-router';

const DealTile = (props) => {


  return(
    <div>
      <div className="callout">
        <div className="row">
          <div className="small 10 columns">
            <h3>{props.title}</h3>
            <p><a className="deal-text" href={props.url}>{props.url}</a></p>
            <p>Link Flair: {props.link_flair}</p>
            <p>Created at: {props.created}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DealTile;

// let dealDate = new Date( {props.created} * 1000 );
// let showDate = document.write(dealDate.toLocaleString());

{/* <p>Created at: {showDate}</p> */}
