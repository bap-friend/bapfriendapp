import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SecondaryScreen} from '../common/SecondaryScreen';
import {MyMeetingHeader} from '../../components/meeting/MyMeetingHeader';
import {MeetingCard} from '../../components/meeting/MeetingCard';
import {useAppNavigation} from '../../hooks/useAppNavigation';

const MyMeetingScreen = () => {
  const navigation = useAppNavigation();
  const insets = useSafeAreaInsets();

  const handleMeetingPress = () => {
    navigation.navigate('ReadMeeting');
  };

  const sampleMeetings = [
    {
      title: "신촌에서 치맥 드실 분!",
      subtitle: "오늘 저녁에 치맥 한잔 하면서 이야기 나눠요",
      location: "신촌역 3번 출구",
      currentMembers: 2,
      maxMembers: 4,
      time: "오후 7:00",
      likes: 5,
      status: 0,
    },
    {
      title: "한강 피크닉 모임",
      subtitle: "여의도 한강공원에서 도시락 먹으면서 수다 떨어요",
      location: "여의도 한강공원",
      currentMembers: 4,
      maxMembers: 4,
      time: "오후 2:00",
      likes: 8,
      status: 1,
    },
    {
      title: "강남 맛집 탐방",
      subtitle: "강남역 근처 숨은 맛집 탐방하실 분~",
      location: "강남역 2번 출구",
      currentMembers: 3,
      maxMembers: 6,
      time: "오후 6:30",
      likes: 3,
      status: 0,
    },
    {
      title: "코엑스 영화 보실 분",
      subtitle: "주말에 코엑스에서 영화 보고 맛있는 거 먹어요",
      location: "삼성중앙역",
      currentMembers: 2,
      maxMembers: 4,
      time: "오후 3:00",
      likes: 6,
      status: 2,
    },
    {
      title: "홍대 카페 투어",
      subtitle: "홍대 예쁜 카페 투어하면서 사진 찍어요!",
      location: "홍대입구역 9번 출구",
      currentMembers: 3,
      maxMembers: 5,
      time: "오후 1:00",
      likes: 7,
      status: 0,
    },
    {
      title: "덕수궁 돌담길 산책",
      subtitle: "선선한 날씨에 덕수궁 돌담길 산책하실 분!",
      location: "시청역 1번 출구",
      currentMembers: 4,
      maxMembers: 6,
      time: "오후 4:00",
      likes: 4,
      status: 1,
    },
  ];

  return (
    <SecondaryScreen header={<MyMeetingHeader />}>
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

export default MyMeetingScreen;
