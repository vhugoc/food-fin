import React from 'react';

import './style.css';

function StyledIcon(props) {
  return (
    <div className={`align-middle styled-icon styled-icon-${props.color}`}>
      <props.icon></props.icon>
    </div>
  );
}

export default StyledIcon;
