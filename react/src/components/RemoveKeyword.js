import React, { Component } from 'react';
import { Link } from 'react-router';

const RemoveKeyword = props => {

  return(
    <div>
      <button className="button tiny" onClick={props.handleClick}>
        Remove Keyword
      </button>
    </div>

  );
}


export default RemoveKeyword;
