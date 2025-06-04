import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SecondaryScreen} from '../common/SecondaryScreen';
import {MeetingHistoryHeader} from '../../components/meeting/MeetingHistoryHeader';
import {MeetingCard} from '../../components/meeting/MeetingCard';
import {useAppNavigation} from '../../hooks/useAppNavigation';

const MeetingHistoryScreen = () => {
  const navigation = useAppNavigation();
  const insets = useSafeAreaInsets();

  const handleMeetingPress = () => {
    navigation.navigate('ReadMeeting');
  };

  const sampleMeetings = [
    {
      title: "홍대 맛집 탐방",
      subtitle: "홍대 숨은 맛집 찾아다니면서 맛있게 먹어요",
      location: "홍대입구역 8번 출구",
      currentMembers: 4,
      maxMembers: 4,
      time: "오후 6:00",
      likes: 12,
      status: 2,  // 종료된 모임만 표시
    },
    {
      title: "한강 러닝 크루",
      subtitle: "여의도 한강공원에서 함께 달려요",
      location: "여의나루역 2번 출구",
      currentMembers: 6,
      maxMembers: 6,
      time: "오전 7:00",
      likes: 15,
      status: 2,
    },
    // ...more sample meetings
  ];

  return (
    <SecondaryScreen header={<MeetingHistoryHeader />}>
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

export default MeetingHistoryScreen;
