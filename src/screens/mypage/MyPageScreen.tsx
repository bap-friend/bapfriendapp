import React from 'react';
import {Text, StyleSheet, View, ScrollView, TouchableOpacity} from 'react-native';
import {MyPageHeader} from '../../components/mypage/MyPageHeader';
import {PrimaryScreen} from '../common/PrimaryScreen';
import {RoundedCard} from '../../components/common/RoundedCard';
import {ProfileImage} from '../../components/common/ProfileImage';
import {useTheme} from '../../hooks/useTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import {TwoButtonCard} from '../../components/mypage/TwoButtonCard';
import {ButtonListCard} from '../../components/mypage/ButtonListCard';

const MyPageScreen = () => {
  const {colors} = useTheme();
  const navigation = useAppNavigation();

  const handleProfilePress = () => {
    navigation.navigate('ProfileEdit');
  };

  const handleMyMeetingPress = () => {
    navigation.navigate('MyMeeting');
  };

  const handleMeetingHistoryPress = () => {
    navigation.navigate('MeetingHistory');
  };

  const handlePendingMeetingPress = () => {
    navigation.navigate('PendingMeeting');
  };
  
  const handleLikeMeetingPress = () => {
    navigation.navigate('LikeMeeting');
  };


  return (
    <PrimaryScreen header={<MyPageHeader />}>
      <ScrollView>
        <View style={styles.contentContainer}>
          <TouchableOpacity onPress={handleProfilePress}>
            <RoundedCard>
              <View style={styles.profileContainer}>
                <ProfileImage />
                <View style={styles.nameContainer}>
                  <Text style={[styles.name, {color: colors.text}]}>홍길동</Text>
                </View>
                <Icon name="chevron-forward" size={24} color={colors.unselected} />
              </View>
            </RoundedCard>
          </TouchableOpacity>

          <TwoButtonCard
            leftButton={{
              title: '관심목록',
              iconName: 'heart-outline',
              onPress: handleLikeMeetingPress,
            }}
            rightButton={{
              title: '이벤트',
              iconName: 'star-outline',
              onPress: () => console.log('이벤트'),
            }}
          />

          <ButtonListCard
            title="모임"
            items={[
              {
                title: '내가 만든 모임',
                iconName: 'create-outline',
                onPress: handleMyMeetingPress,
              },
              {
                title: '참여내역',
                iconName: 'people-outline',
                onPress: handleMeetingHistoryPress,
              },
              {
                title: '승인 대기중인 모임',
                iconName: 'time-outline',
                onPress: handlePendingMeetingPress,
              },
            ]}
          />

          <ButtonListCard
            title="고객지원"
            items={[
              {
                title: '공지사항',
                iconName: 'megaphone-outline',
                onPress: () => console.log('공지사항'),
              },
              {
                title: '고객센터',
                iconName: 'help-circle-outline',
                onPress: () => console.log('고객센터'),
              },
              {
                title: '광고 및 제휴매장 문의',
                iconName: 'business-outline',
                onPress: () => console.log('광고 및 제휴'),
              },
              {
                title: '의견 남기기',
                iconName: 'chatbox-outline',
                onPress: () => console.log('의견 남기기'),
              },
              {
                title: '약관 및 정책',
                iconName: 'document-text-outline',
                onPress: () => console.log('약관 및 정책'),
              },
            ]}
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
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameContainer: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default MyPageScreen;
