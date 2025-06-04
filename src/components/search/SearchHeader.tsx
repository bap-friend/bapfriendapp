import React from 'react';
import {SecondaryHeader} from '../common/SecondaryHeader';

export const SearchHeader = () => {
  return (
    <SecondaryHeader 
      title="검색"
      rightButton1={{
        iconName: 'filter',
        onPress: () => console.log('Open filter'),
      }}
    />
  );
};
