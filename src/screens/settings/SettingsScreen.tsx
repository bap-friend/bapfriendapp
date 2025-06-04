import React from 'react';
import {Text} from 'react-native';
import {SecondaryScreen} from '../common/SecondaryScreen';
import {SettingsHeader} from '../../components/settings/SettingsHeader';

const SettingsScreen = () => {
  return (
    <SecondaryScreen header={<SettingsHeader />}>
      <Text>설정 화면</Text>
    </SecondaryScreen>
  );
};

export default SettingsScreen;
