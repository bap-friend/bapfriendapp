import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {ListHeader} from '../../components/list/ListHeader';
import {FloatingPlusButton} from '../../components/common/FloatingPlusButton';
import {PrimaryScreen} from '../common/PrimaryScreen';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import {ListCard} from '../../components/list/ListCard';
import {useTheme} from '../../hooks/useTheme';

const ListScreen = () => {
  const navigation = useAppNavigation();
  const {colors} = useTheme();

  const handlePress = () => {
    navigation.navigate('CreateMeeting');
  };

  return (
    <PrimaryScreen
      header={<ListHeader />}
      floatingButton={<FloatingPlusButton onPress={handlePress} />}
    >
      <ScrollView>
        <View style={styles.contentContainer}>
          <ListCard
            title="신촌에서 치맥 드실 분!"
            subtitle="오늘 저녁 7시, 신촌역 3번 출구에서 만나서 치맥 하실 분 구합니다~"
            titleColor={colors.text}
            subtitleColor={colors.unselected}
          />
          <View style={[styles.divider, {backgroundColor: colors.border}]} />
          <ListCard
            title="한강에서 피크닉 어때요?"
            subtitle="여의도 한강공원에서 도시락 먹으면서 수다 떨어요"
            titleColor={colors.text}
            subtitleColor={colors.unselected}
          />
          <View style={[styles.divider, {backgroundColor: colors.border}]} />
          <ListCard
            title="한강에서 피크닉 어때요?"
            subtitle="여의도 한강공원에서 도시락 먹으면서 수다 떨어요"
            titleColor={colors.text}
            subtitleColor={colors.unselected}
          />
          <View style={[styles.divider, {backgroundColor: colors.border}]} />
          <ListCard
            title="한강에서 피크닉 어때요?"
            subtitle="여의도 한강공원에서 도시락 먹으면서 수다 떨어요"
            titleColor={colors.text}
            subtitleColor={colors.unselected}
          />
          <View style={[styles.divider, {backgroundColor: colors.border}]} />
          <ListCard
            title="한강에서 피크닉 어때요?"
            subtitle="여의도 한강공원에서 도시락 먹으면서 수다 떨어요"
            titleColor={colors.text}
            subtitleColor={colors.unselected}
          />
          <View style={[styles.divider, {backgroundColor: colors.border}]} />
          <ListCard
            title="한강에서 피크닉 어때요?"
            subtitle="여의도 한강공원에서 도시락 먹으면서 수다 떨어요"
            titleColor={colors.text}
            subtitleColor={colors.unselected}
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
