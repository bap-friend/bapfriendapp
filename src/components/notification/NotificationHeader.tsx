import React from 'react';
import {SecondaryHeader} from '../common/SecondaryHeader';

export const NotificationHeader = () => {
  return (
    <SecondaryHeader 
      title="알림"
      rightButton1={{
        iconName: 'checkmark',
        onPress: () => console.log('Read all notifications'),
      }}
    />
  );
};
