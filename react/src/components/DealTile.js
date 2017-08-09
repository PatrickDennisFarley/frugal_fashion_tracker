import React from 'react';
import { Link } from 'react-router';
import * as moment from 'moment';

const DealTile = (props) => {

  let date = moment.utc(props.created).toDate();
  let displayDate = moment.unix(date).format('DD-MM-YYYY HH:mm:ss');

  return(
    <div>
      <div className="callout">
        <div className="row">
          <div className="small 10 columns">
            <h3><a className="deal-text" href={props.url}>{props.title}</a></h3>
            <h4>{props.link_flair}</h4>
            <p>{displayDate}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DealTile;
