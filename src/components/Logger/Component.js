import React from 'react';
import './Component.scss';

const Logger = ({logs}) => (
  <div className="Logger">
    {logs && logs.map(log => <p>- {log}</p>)}
  </div>
);

export default Logger;
