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

const MyPageScreen = () => {
  const {colors} = useTheme();
  const navigation = useAppNavigation();

  const handleProfilePress = () => {
    navigation.navigate('ProfileEdit');
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
              onPress: () => console.log('관심목록'),
            }}
            rightButton={{
              title: '이벤트',
              iconName: 'star-outline',
              onPress: () => console.log('이벤트'),
            }}
          />

          <RoundedCard>
            <Text style={[styles.cardTitle, {color: colors.text}]}>모임</Text>
            <TouchableOpacity style={styles.listItem}>
              <View style={styles.listItemLeft}>
                <Icon name="create-outline" size={20} color={colors.unselected} />
                <Text style={[styles.listItemText, {color: colors.text}]}>
                  내가 만든 모임
                </Text>
              </View>
              <Icon name="chevron-forward" size={20} color={colors.unselected} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.listItem}>
              <View style={styles.listItemLeft}>
                <Icon name="people-outline" size={20} color={colors.unselected} />
                <Text style={[styles.listItemText, {color: colors.text}]}>
                  참여내역
                </Text>
              </View>
              <Icon name="chevron-forward" size={20} color={colors.unselected} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.listItem}>
              <View style={styles.listItemLeft}>
                <Icon name="time-outline" size={20} color={colors.unselected} />
                <Text style={[styles.listItemText, {color: colors.text}]}>
                  승인 대기중인 모임
                </Text>
              </View>
              <Icon name="chevron-forward" size={20} color={colors.unselected} />
            </TouchableOpacity>
          </RoundedCard>

          <RoundedCard>
            <Text style={[styles.cardTitle, {color: colors.text}]}>고객지원</Text>
            <TouchableOpacity style={styles.listItem}>
              <View style={styles.listItemLeft}>
                <Icon name="megaphone-outline" size={20} color={colors.unselected} />
                <Text style={[styles.listItemText, {color: colors.text}]}>
                  공지사항
                </Text>
              </View>
              <Icon name="chevron-forward" size={20} color={colors.unselected} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.listItem}>
              <View style={styles.listItemLeft}>
                <Icon name="help-circle-outline" size={20} color={colors.unselected} />
                <Text style={[styles.listItemText, {color: colors.text}]}>
                  고객센터
                </Text>
              </View>
              <Icon name="chevron-forward" size={20} color={colors.unselected} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.listItem}>
              <View style={styles.listItemLeft}>
                <Icon name="business-outline" size={20} color={colors.unselected} />
                <Text style={[styles.listItemText, {color: colors.text}]}>
                  광고 및 제휴매장 문의
                </Text>
              </View>
              <Icon name="chevron-forward" size={20} color={colors.unselected} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.listItem}>
              <View style={styles.listItemLeft}>
                <Icon name="chatbox-outline" size={20} color={colors.unselected} />
                <Text style={[styles.listItemText, {color: colors.text}]}>
                  의견 남기기
                </Text>
              </View>
              <Icon name="chevron-forward" size={20} color={colors.unselected} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.listItem}>
              <View style={styles.listItemLeft}>
                <Icon name="document-text-outline" size={20} color={colors.unselected} />
                <Text style={[styles.listItemText, {color: colors.text}]}>
                  약관 및 정책
                </Text>
              </View>
              <Icon name="chevron-forward" size={20} color={colors.unselected} />
            </TouchableOpacity>
          </RoundedCard>
        </View>
      </ScrollView>
    </PrimaryScreen>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
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
  email: {
    fontSize: 14,
    marginTop: 4,
  },
  statItem: {
    alignItems: 'center',
    marginRight: 24,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '600',
  },
  statLabel: {
    fontSize: 14,
    marginTop: 4,
  },
  infoText: {
    fontSize: 14,
    color: 'gray',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  listItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 15,
    marginLeft: 12,
  },
});

export default MyPageScreen;
