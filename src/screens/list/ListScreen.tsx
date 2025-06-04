import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {ListHeader} from '../../components/list/ListHeader';
import {FloatingPlusButton} from '../../components/common/FloatingPlusButton';
import {PrimaryScreen} from '../common/PrimaryScreen';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import {MeetingCard} from '../../components/meeting/MeetingCard';


const ListScreen = () => {
  const navigation = useAppNavigation();


  const handlePress = () => {
    navigation.navigate('CreateMeeting');
  };

  const handleCardPress = () => {
    navigation.navigate('ReadMeeting');
  };

  return (
    <PrimaryScreen
      header={<ListHeader />}
      floatingButton={<FloatingPlusButton onPress={handlePress} />}
    >
      <ScrollView>
        <View style={styles.contentContainer}>
          <MeetingCard
            title="신촌에서 치맥 드실 분!"
            subtitle="오늘 저녁 7시, 신촌역 3번 출구에서 만나서 치맥 하실 분 구합니다~glglasdfasdfas"
            onPress={handleCardPress}
            status={0}
          />
          <MeetingCard
            title="한강에서 피크닉 어때요?"
            subtitle="여의도 한강공원에서 도시락 먹으면서 수다 떨어요"
            onPress={handleCardPress}
            status={1}
          />
          <MeetingCard
            title="한강에서 피크닉 어때요?"
            subtitle="여의도 한강공원에서 도시락 먹으면서 수다 떨어요"
            onPress={handleCardPress}
            status={2}
          />
          <MeetingCard
            title="한강에서 피크닉 어때요?"
            subtitle="여의도 한강공원에서 도시락 먹으면서 수다 떨어요"
            onPress={handleCardPress}
            status={2}
          />
          <MeetingCard
            title="한강에서 피크닉 어때요?"
            subtitle="여의도 한강공원에서 도시락 먹으면서 수다 떨어요"
            onPress={handleCardPress}
            status={2}
          />
          <MeetingCard
            title="한강에서 피크닉 어때요?"
            subtitle="여의도 한강공원에서 도시락 먹으면서 수다 떨어요"
            onPress={handleCardPress}
            status={2}
          />
        </View>
      </ScrollView>
    </PrimaryScreen>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    padding: 16,
  },
  divider: {
    height: 1,
  },
});

export default ListScreen;
