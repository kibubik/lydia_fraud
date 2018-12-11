import React from 'react';
import './Component.scss';

const RoundDisplay = ({imageUrl, contentInfo, contentColor}) => (
  <div className="Rounded" style={{backgroundImage: `url(${imageUrl})`}}>
    <span style={{backgroundColor: contentColor}}>{contentInfo}</span>
  </div>
);

export default RoundDisplay;
