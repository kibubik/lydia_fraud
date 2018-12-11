import React from 'react';
import './Component.scss';

const Icon = ({url, active = true, label=""}) => (
  <div className="Icon">
    <img src={url} title={label} className={active && "active"}/>
  </div>
);

export default Icon;
