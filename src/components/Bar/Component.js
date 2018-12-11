import React from 'react';
import './Component.scss';

const Bar = ({total, value, contentColor, formatFunction, label}) => (
  <div className="Bar">
    <span
      className="value"
      style={{
        borderBottomColor: contentColor,
        minWidth: total ? Math.abs (value / total * 100) + "%" : "auto",
      }}
    >
      {formatFunction ? formatFunction (value) : value}
    </span>
    <span className="label">{label}</span>
  </div>
);

export default Bar;
