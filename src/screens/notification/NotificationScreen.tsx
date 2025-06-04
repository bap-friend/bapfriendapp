import React from 'react';
import {Text} from 'react-native';
import {SecondaryScreen} from '../common/SecondaryScreen';
import { NotificationHeader } from '../../components/notification/NotificationHeader';

const NotificationScreen = () => {
  return (
    <SecondaryScreen header={<NotificationHeader />}>
      <Text>알림 화면</Text>
    </SecondaryScreen>
  );
};

export default NotificationScreen;
