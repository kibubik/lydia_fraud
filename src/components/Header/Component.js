import React from 'react';
import './Component.scss';
import Logger from '../Logger';
import UserInfos from './UserInfos';
import Balances from '../Balances';
import {
  getLydiaBalance,
  getAllAcountsBalance,
  getExchangedBalance,
  getUserProducts,
} from '../../config/data';
import { formatCurrency } from '../../formatData';

const Header = ({userIndex}) => {
  const lydiaBalance = getLydiaBalance (userIndex);
  const allAcountsBalance = getAllAcountsBalance (userIndex);
  const exchangedBalance = getExchangedBalance (userIndex);
  const renderedBalances = [
    {
      icons: [
        {url: '/img/lydia.png'},
      ],
      contentColor: lydiaBalance.securityColor,
      value: lydiaBalance.value,
      total: lydiaBalance.total,
      label: 'Lydia balance',
      format:formatCurrency
    },
    {
      icons: getUserProducts (userIndex),
      contentColor: allAcountsBalance.securityColor,
      value: allAcountsBalance.value,
      total: allAcountsBalance.total,
      label: 'All Lydia accounts',
      format:formatCurrency
    },
    {
      icons: [
        {url: '/img/exchange.png'},
      ],
      contentColor: exchangedBalance.securityColor,
      value: exchangedBalance.value,
      total: exchangedBalance.total,
      label: 'Exchanged the last 3 months',
      format:formatCurrency
    },
  ];

  return (
    <header>
      <UserInfos {...{userIndex}} />
      <Balances {...{renderedBalances}} />
      <Logger logs={['Fraud team #2 reviewed this user on Wednesday.', 'Fraud team #1 confirmed that the average time seems suspicous on Friday.','Fraud team #2 reviewed this user on Wednesday.', 'Fraud team #1 confirmed that the average time seems suspicous on Friday.','Fraud team #2 reviewed this user on Wednesday.', 'Fraud team #1 confirmed that the average time seems suspicous on Friday.']} />
    </header>
  );
};

export default Header;
