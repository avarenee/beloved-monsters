import React from 'react';
import { oneOf, string } from 'prop-types';

const left = <polygon points="34,10 10,50 34,90 40,90 16,50 40,10" />;
const right = <polygon points="16,10 40,50 16,90 10,90 34,50 10,10" />;

const iconMapper = {
    left,
    right
};

const SVG = (props) => {
    const {
      viewBox,
      icon,
    } = props;
    return (
      <svg
        className="image-gallery-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
      >
        {iconMapper[icon]}
      </svg>
    );
  };
  
  SVG.propTypes = {
    viewBox: string,
    icon: oneOf([
      'left',
      'right'
    ]).isRequired,
  };
  
  SVG.defaultProps = {
    viewBox: '0 0 50 100'
  };
  
  export default SVG;