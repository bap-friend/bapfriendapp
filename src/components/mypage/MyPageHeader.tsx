import React from 'react';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import {PrimaryHeader} from '../common/PrimaryHeader';

export const MyPageHeader = () => {
  const navigation = useAppNavigation();

  return (
    <PrimaryHeader
      title="마이페이지"
      rightButton1={{
        iconName: 'settings-outline',
        onPress: () => navigation.navigate('Settings'),
      }}
    />
  );
};
