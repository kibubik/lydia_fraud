import React from 'react';
import './Component.scss';
import RoundDisplay from '../RoundDisplay';
import {COLORS} from '../../config/style';
import {
  isUserVerified,
  getAppVersion,
  getOSIcon,
  isAppUpdated,
  getUserName,
  getUserPic,
} from '../../config/data';

const UserInfos = ({userIndex}) => {
  return (
    <div className="UserInfos">
      <RoundDisplay
        contentInfo=""
        contentColor={isUserVerified (userIndex) ? COLORS.GOOD : COLORS.NONE}
        imageUrl={getUserPic (userIndex)}
      />
      <RoundDisplay
        contentInfo={getAppVersion (userIndex)}
        contentColor={
          isAppUpdated (userIndex) ? COLORS.VERIFIED : COLORS.WARNING
        }
        imageUrl={getOSIcon (userIndex)}
      />
      <h2>{getUserName (userIndex)}</h2>
    </div>
  );
};

export default UserInfos;
