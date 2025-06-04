import React from 'react';
import {Text} from 'react-native';
import {SecondaryScreen} from '../common/SecondaryScreen';
import { SearchHeader } from '../../components/search/SearchHeader';

const SearchScreen = () => {
  return (
    <SecondaryScreen header={<SearchHeader />}>
      <Text>검색 화면</Text>
    </SecondaryScreen>
  );
};

export default SearchScreen;
