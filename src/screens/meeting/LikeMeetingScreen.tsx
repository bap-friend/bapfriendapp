import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SecondaryScreen} from '../common/SecondaryScreen';
import {LikeMeetingHeader} from '../../components/meeting/LikeMeetingHeader';
import {MeetingCard} from '../../components/meeting/MeetingCard';
import {useAppNavigation} from '../../hooks/useAppNavigation';

const LikeMeetingScreen = () => {
  const navigation = useAppNavigation();
  const insets = useSafeAreaInsets();

  const handleMeetingPress = () => {
    navigation.navigate('ReadMeeting');
  };

  const sampleMeetings = [
    {
      title: "주말 독서모임",
      subtitle: "성수동 카페에서 좋아하는 책 이야기 나눠요",
      location: "성수역 1번 출구",
      currentMembers: 3,
      maxMembers: 8,
      time: "오후 2:00",
      likes: 15,
      status: 0,
    },
    {
      title: "잠실 러닝 크루",
      subtitle: "석촌호수 한바퀴 돌면서 건강도 챙기고 친구도 만들어요",
      location: "잠실역 2번 출구",
      currentMembers: 4,
      maxMembers: 10,
      time: "오전 7:00",
      likes: 12,
      status: 0,
    },
    {
      title: "을지로 맛집 탐방",
      subtitle: "을지로 숨은 골목식당 탐방하실 분~",
      location: "을지로3가역 1번 출구",
      currentMembers: 2,
      maxMembers: 4,
      time: "오후 6:30",
      likes: 9,
      status: 0,
    },
    {
      title: "주말 보드게임 모임",
      subtitle: "신논현 보드게임카페에서 즐거운 시간 보내요",
      location: "신논현역 6번 출구",
      currentMembers: 5,
      maxMembers: 8,
      time: "오후 3:00",
      likes: 11,
      status: 0,
    },
  ];

  return (
    <SecondaryScreen header={<LikeMeetingHeader />}>
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

export default LikeMeetingScreen;