import React from 'react';

import './style.css';

function PageTitle(props) {
  return (
    <div className="page-title-container">
      <h1 className="page-title">{props.title}</h1>
      <p className="page-subtitle">{props.subtitle}</p>
    </div>
  );
}

export default PageTitle;
