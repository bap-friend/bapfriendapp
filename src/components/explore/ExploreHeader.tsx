import React from 'react';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import {PrimaryHeader} from '../common/PrimaryHeader';

export const ExploreHeader = () => {
  const navigation = useAppNavigation();

  return (
    <PrimaryHeader
      title="둘러보기"
      rightButton1={{
        iconName: 'search-outline',
        onPress: () => navigation.navigate('Search'),
      }}
      rightButton2={{
        iconName: 'notifications-outline',
        onPress: () => navigation.navigate('Notifications'),
      }}
    />
  );
};
