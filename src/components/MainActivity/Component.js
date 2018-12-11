import React from 'react';
import './Component.scss';
import RoundDisplay from '../RoundDisplay';
import {COLORS} from '../../config/style';
import Balances from '../Balances';
import Logger from '../Logger';
import {
  formatCurrency,
  formatTransaction,
  formatPercentage,
  formatTime,
} from '../../formatData';
import {
  getUsersFromMainActivity,
  getUserName,
  getUserPic,
  getVolumeExchanged,
  getTransactions,
  getCBUsage,
  getAverageTime,
  getSecurityReward,
} from '../../config/data';

const MainActivity = ({userIndex}) => (
  <main>
    {getUsersFromMainActivity (userIndex).map (user => {
      const volumeExchanged = getVolumeExchanged (userIndex, user);
      const transactions = getTransactions (userIndex, user);
      const CBUsage = getCBUsage (userIndex, user);
      const averageTime = getAverageTime (userIndex, user);
      const renderedBalances = [
        {
          icons: [{url: '/img/exchange.png'}],
          contentColor: volumeExchanged.securityColor,
          value: volumeExchanged.value,
          total: volumeExchanged.total,
          label: 'Volume exchanged',
          format: formatCurrency,
        },
        {
          icons: [{url: '/img/transaction.png'}],
          contentColor: transactions.securityColor,
          value: transactions.value,
          label: 'Nbr of transaction',
          format: formatTransaction,
        },
        {
          icons: [{url: '/img/card_lydia.png'}],
          contentColor: CBUsage.securityColor,
          value: CBUsage.value,
          total: 100,
          label: 'The % of CB usage',
          format: formatPercentage,
        },
        {
          icons: [{url: '/img/time.png'}],
          contentColor: averageTime.securityColor,
          value: averageTime.value,
          label: 'Average time between 2 Lydia',
          format: formatTime,
        },
      ];
      return (
        <div className="activity">
          <div className="Two">
            <RoundDisplay
              imageUrl={getUserPic (user)}
              contentInfo={getSecurityReward (userIndex, user)}
              contentColor={COLORS.VERIFIED}
            />
            <h2>{getUserName (user)}</h2>
          </div>
          <Balances {...{renderedBalances}} />
          <Logger />
        </div>
      );
    })}

  </main>
);

export default MainActivity;
