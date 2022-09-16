import React from 'react';
import { bool, func } from 'prop-types';
import SVG from './SVG';
import './RightNav.css';

const RightNav = React.memo(({
    disabled,
    onClick,
  }) => {
    return (
      <button
        type="button"
        className="image-gallery-icon image-gallery-right-nav"
        disabled={disabled}
        onClick={onClick}
        aria-label="Next Slide"
      >
        <SVG icon="right"/>
      </button>
    );
  });
  
  RightNav.displayName = 'RightNav';
  
  RightNav.propTypes = {
    disabled: bool.isRequired,
    onClick: func.isRequired,
  };

export default RightNav