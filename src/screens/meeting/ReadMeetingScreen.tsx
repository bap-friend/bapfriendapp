import React from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {SecondaryScreen} from '../common/SecondaryScreen';
import {ReadMeetingHeader} from '../../components/meeting/ReadMeetingHeader';
import {useTheme} from '../../hooks/useTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import {ProfileImage} from '../../components/common/ProfileImage';
import {RADIUS, COLORS} from '../../constants/design';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const IMAGE_HEIGHT = (SCREEN_WIDTH * 4) / 10;

type MeetingStatus = 0 | 1 | 2;  // 상태 타입 정의

interface MemberProps {
  imageUrl?: string;
  nickname: string;
}

const MemberCard = ({imageUrl, nickname}: MemberProps) => {
  const {colors} = useTheme();
  
  return (
    <View style={styles.memberCard}>
      <ProfileImage size={40} imageUrl={imageUrl} />
      <Text style={[styles.memberName, {color: colors.text}]}>{nickname}</Text>
    </View>
  );
};

interface ReadMeetingProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl?: string;
  status: MeetingStatus;
  date: string;
  time: string;
  location: string;
  currentMembers: number;
  maxMembers: number;
  likes: number;
  needsApproval: boolean;
  deposit: number;  // 위약금 필드 추가
}

const ReadMeetingScreen = () => {
  const {colors} = useTheme();
  
  const dummyMembers: MemberProps[] = [
    {nickname: '아오키지센고쿠키자루몽키디버그몽키디루피'},
    {nickname: '김철수'},
    {nickname: '이영희'},
    {nickname: '박지민'},
  ];

  // API 호출 후 받아올 데이터 모킹
  const meetingData: ReadMeetingProps = {
    title: "신촌에서 치맥 드실 분!",
    subtitle: "오늘 저녁에 치맥 한잔 하면서 이야기 나눠요",
    description: "안녕하세요! 오늘 저녁에 치맥 드실 분 구해요.\n편하게 이야기 나누면서 맛있게 먹어요~\n술은 적당히 마시고 즐겁게 놀아요!",
    status: 0,
    date: "2024년 6월 5일 (수)",
    time: "오후 7:00",
    location: "신촌역 3번 출구",
    currentMembers: 4,
    maxMembers: 4,
    likes: 5,
    needsApproval: false,
    deposit: 0,  // 위약금 예시 데이터 추가
  };

  const getStatusConfig = (status: MeetingStatus) => {  // 타입 수정
    switch (status) {
      case 0:
        return {
          text: '모집중',
          backgroundColor: COLORS.status0background,
          textColor: COLORS.status0text,
        };
      case 1:
        return {
          text: '확정',
          backgroundColor: COLORS.status1background,
          textColor: COLORS.status1text,
        };
      case 2:
        return {
          text: '종료',
          backgroundColor: COLORS.status2background,
          textColor: COLORS.status2text,
        };
    }
  };

  const statusConfig = getStatusConfig(meetingData.status);

  return (
    <SecondaryScreen header={<ReadMeetingHeader />}>
      <ScrollView style={styles.container}>
        <View style={[styles.imageContainer, {backgroundColor: colors.border}]} />
        
        <View style={styles.content}>
          {/* Title Section */}
          <View style={styles.titleContainer}>
            <Text style={[styles.title, {color: colors.text}]}>
              {meetingData.title}
            </Text>
            <View style={[styles.statusBadge, {backgroundColor: statusConfig.backgroundColor}]}>
              <Text style={[styles.statusText, {color: statusConfig.textColor}]}>
                {statusConfig.text}
              </Text>
            </View>
          </View>

          <Text style={[styles.subtitle, {color: colors.unselected}]}>
            {meetingData.subtitle}
          </Text>

          <Text style={[styles.description, {color: colors.text}]}>
            {meetingData.description}
          </Text>

          {/* Date & Time Section */}
          <Text style={[styles.sectionTitle, {color: colors.text}]}>모임 일시</Text>
          <View style={styles.sectionSpacing} />
          <View style={styles.dateTimeContainer}>
            <View style={styles.infoSection}>
              <Icon name="calendar-outline" size={20} color={colors.unselected} />
              <Text style={[styles.infoText, {color: colors.text}]}>
                {meetingData.date}
              </Text>
            </View>
            <View style={styles.infoSection}>
              <Icon name="time-outline" size={20} color={colors.unselected} />
              <Text style={[styles.infoText, {color: colors.text}]}>
                {meetingData.time}
              </Text>
            </View>
          </View>

          {/* Location Section */}
          <Text style={[styles.sectionTitle, {color: colors.text}]}>모임 장소</Text>
          <View style={styles.sectionSpacing} />
          <View style={styles.mapContainer}>
            <View style={styles.map} />
            <View style={styles.locationTextContainer}>
              <Icon name="location-outline" size={20} color={colors.unselected} />
              <Text style={[styles.locationText, {color: colors.text}]}>
                {meetingData.location}
              </Text>
            </View>
          </View>

          {/* Members Section */}
          <View style={styles.membersTitleContainer}>
            <Text style={[styles.sectionTitle, {color: colors.text}]}>모임원</Text>
            <View style={styles.membersCount}>
              <Icon name="people-outline" size={17} color={colors.unselected} />
              <Text style={[styles.membersCountText, {color: colors.unselected}]}>
                {meetingData.currentMembers}/{meetingData.maxMembers}명
              </Text>
            </View>
          </View>
          <View style={styles.membersGrid}>
            {dummyMembers.map((member, index) => (
              <MemberCard key={index} {...member} />
            ))}
          </View>
          
          {/* Bottom Padding for BottomBar */}
          <View style={styles.bottomPadding} />
        </View>
      </ScrollView>

      <BottomBar 
        needsApproval={meetingData.needsApproval} 
        likes={meetingData.likes}
        deposit={meetingData.deposit}
        currentMembers={meetingData.currentMembers}
        maxMembers={meetingData.maxMembers}
      />
    </SecondaryScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width: SCREEN_WIDTH,
    height: IMAGE_HEIGHT * 1.5,  // 높이 1.5배 증가
  },
  content: {
    padding: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    flex: 1,
  },
  statusBadge: {
    backgroundColor: 'rgba(255, 204, 0, 0.15)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginLeft: 8,
  },
  statusText: {
    color: '#FFB800',
    fontSize: 12,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 15,
    marginBottom: 16,
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '600',
  },
  sectionSpacing: {
    height: 16,  // 섹션 헤더와 콘텐츠 사이 간격
  },
  dateTimeContainer: {
    marginBottom: 32,  // 다음 섹션과의 간격
  },
  infoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,  // 날짜와 시간 사이 간격
  },
  infoText: {
    fontSize: 15,
    marginLeft: 8,
  },
  mapContainer: {
    marginBottom: 32,  // 다음 섹션과의 간격
    borderRadius: RADIUS.lg,
    overflow: 'hidden',
  },
  map: {
    width: '100%',
    height: 133,
    backgroundColor: '#4CD964',
  },
  locationTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  locationText: {
    color: '#007AFF',
  },
  membersTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,  // 헤더와 멤버 그리드 사이 간격
  },
  membersCount: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  membersCountText: {
    fontSize: 14,
    marginLeft: 4,
  },
  membersGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -8,
  },
  memberCard: {
    width: '50%',
    paddingHorizontal: 8,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  memberName: {
    fontSize: 15,
    marginLeft: 8,
    flex: 1,        // 추가
    maxWidth: 100,  // 추가: 최대 너비 제한
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
  },
  bottomBarContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,  // 높이 조절
  },
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  likesCount: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
    marginLeft: 4,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 12,
  },
  approvalText: {
    fontSize: 13,
  },
  depositInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginLeft: 0,  // 승인 텍스트와 동일선상 시작
  },
  depositText: {
    fontSize: 13,
    marginLeft: 4,
  },
  joinButton: {
    backgroundColor: '#FFB800',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: RADIUS.md,
  },
  joinButtonDisabled: {
    backgroundColor: '#f0f0f0',  // 또는 다른 비활성화 색상
  },
  joinButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
  },
  joinButtonTextDisabled: {
    color: '#a0a0a0',
  },
  bottomPadding: {
    height: 80,  // BottomBar 새로운 높이에 맞춰 조정
  },
});

const BottomBar = ({
  needsApproval, 
  likes, 
  deposit,
  currentMembers,  // 추가
  maxMembers,     // 추가
}: {
  needsApproval: boolean;
  likes: number;
  deposit: number;
  currentMembers: number;
  maxMembers: number;
}) => {
  const {colors} = useTheme();
  const insets = useSafeAreaInsets();
  const isFull = currentMembers >= maxMembers;

  return (
    <View style={[
      styles.bottomBar, 
      {
        backgroundColor: 'white',
        paddingBottom: insets.bottom, // SafeArea 패딩 추가
      }
    ]}>
      <View style={styles.bottomBarContent}>
        <View style={styles.likeContainer}>
          <Icon name="heart-outline" size={24} color={colors.text} />
          <Text style={[styles.likesCount, {color: colors.text}]}>{likes}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={[styles.approvalText, {color: colors.unselected}]}>
            {needsApproval 
              ? "모임장의 승인이 필요한 모임입니다" 
              : "모임장의 승인 없이 참여 가능합니다"}
          </Text>
          {deposit > 0 && (
            <View style={styles.depositInfo}>
              <Icon name="alert-circle" size={16} color="#007AFF" />
              <Text style={[styles.depositText, {color: '#007AFF'}]}>
                노쇼 위약금이 있는 모임입니다
              </Text>
            </View>
          )}
        </View>
        <View style={[
          styles.joinButton, 
          isFull && styles.joinButtonDisabled
        ]}>
          <Text style={[
            styles.joinButtonText,
            isFull && styles.joinButtonTextDisabled
          ]}>
            {isFull ? '참여불가' : '참여하기'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ReadMeetingScreen;
