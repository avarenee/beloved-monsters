import React from 'react';
import './Label.css';

function Label(props) {
  function createTitle() {
    return `${props.item.title}${props.item.model ? ` (${props.item.model})` : ""}`
  }
  function createDescription() {
    return `${props.item.year}, ${props.item.medium}, ${props.item.width}x${props.item.height}${props.item.units}`;
  }
  return (
    <div className="Label">
        <span className="Title">
          {createTitle()}
        </span>
        <br />
        <span className="Description">
          {createDescription()}
        </span>
    </div>
  )
}

export default Label