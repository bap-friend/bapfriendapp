import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SecondaryScreen} from '../common/SecondaryScreen';
import {PendingMeetingHeader} from '../../components/meeting/PendingMeetingHeader';
import {MeetingCard} from '../../components/meeting/MeetingCard';
import {useAppNavigation} from '../../hooks/useAppNavigation';

const PendingMeetingScreen = () => {
  const navigation = useAppNavigation();
  const insets = useSafeAreaInsets();

  const handleMeetingPress = () => {
    navigation.navigate('ReadMeeting');
  };

  const sampleMeetings = [
    {
      title: "강남 보드게임 모임",
      subtitle: "보드게임 카페에서 새로운 게임 배워보아요",
      location: "강남역 4번 출구",
      currentMembers: 3,
      maxMembers: 6,
      time: "오후 7:30",
      likes: 8,
      status: 0,  // 모집중인 모임만 표시
    },
    {
      title: "청계천 사진 산책",
      subtitle: "청계천 따라 걸으면서 인생샷 찍어요",
      location: "종로3가역 1번 출구",
      currentMembers: 2,
      maxMembers: 5,
      time: "오후 2:00",
      likes: 6,
      status: 0,
    },
    // ...more sample meetings
  ];

  return (
    <SecondaryScreen header={<PendingMeetingHeader />}>
      <ScrollView 
        style={styles.container}
        contentContainerStyle={[
          styles.contentContainer,
          {paddingBottom: insets.bottom},
        ]}
      >
        {sampleMeetings.map((meeting, index) => (
          <MeetingCard
            key={index}
            {...meeting}
            onPress={handleMeetingPress}
          />
        ))}
      </ScrollView>
    </SecondaryScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
});

export default PendingMeetingScreen;
