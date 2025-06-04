import React from 'react';
import {SecondaryHeader} from '../common/SecondaryHeader';
import {useAppNavigation} from '../../hooks/useAppNavigation';

export const ProfileEditHeader = () => {
  const navigation = useAppNavigation();

  return (
    <SecondaryHeader
      title="프로필 수정"
      rightButton1={{
        iconName: 'checkmark',
        onPress: () => navigation.goBack(),
      }}
    />
  );
};
