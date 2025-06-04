import React from 'react';
import {Text} from 'react-native';
import {ExploreHeader} from '../../components/explore/ExploreHeader';
import {FloatingPlusButton} from '../../components/common/FloatingPlusButton';
import {PrimaryScreen} from '../common/PrimaryScreen';
import { useAppNavigation } from '../../hooks/useAppNavigation';

const ExploreScreen = () => {
  const navigation = useAppNavigation();

  const handlePress = () => {
    navigation.navigate('CreateMeeting');
  };

  return (
    <PrimaryScreen
      header={<ExploreHeader />}
      floatingButton={<FloatingPlusButton onPress={handlePress} />}
    >
      <Text>둘러보기 화면</Text>
    </PrimaryScreen>
  );
};

export default ExploreScreen;
