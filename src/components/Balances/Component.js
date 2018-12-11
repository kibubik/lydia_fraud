import React from 'react';
import './Component.scss';
import Bar from '../Bar';
import Icon from '../Icon';

const Balances = ({renderedBalances}) => (
  <div className="Charts">
    {renderedBalances.map (balance => (
      <div>
        <div className="Icons">
          {balance.icons.map (icon => <Icon {...icon} />)}
        </div>
        <Bar {...balance} formatFunction={balance.format} />
      </div>
    ))}
  </div>
);

export default Balances;
