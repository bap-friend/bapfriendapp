import React from 'react';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import {PrimaryHeader} from '../common/PrimaryHeader';

export const ChatHeader = () => {
  const navigation = useAppNavigation();

  return (
    <PrimaryHeader
      title="채팅"
      rightButton1={{
        iconName: 'notifications-outline',
        onPress: () => navigation.navigate('Notifications'),
      }}
    />
  );
};
