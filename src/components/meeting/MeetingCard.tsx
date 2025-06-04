import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {RADIUS, COLORS} from '../../constants/design';
import {useTheme} from '../../hooks/useTheme';

type MeetingStatus = 0 | 1 | 2;

interface MeetingCardProps {
  title: string;
  subtitle: string;
  imageUrl?: string;
  style?: object;
  location?: string;
  currentMembers?: number;
  maxMembers?: number;
  time?: string;
  likes?: number;
  onPress?: () => void;
  status: MeetingStatus;
}

export const MeetingCard = ({
  title,
  subtitle,
  imageUrl,
  style,
  location = '신촌역 3번 출구',
  currentMembers = 2,
  maxMembers = 4,
  time = '오후 7:00',
  likes = 5,
  onPress,
  status = 0,
}: MeetingCardProps) => {
  const {colors} = useTheme();

  const getStatusConfig = (status: MeetingStatus) => {
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

  const statusConfig = getStatusConfig(status);

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, style]}>
        <View style={styles.imageContainer}>
          {imageUrl ? (
            <Image source={{uri: imageUrl}} style={styles.image} />
          ) : (
            <View style={styles.placeholder} />
          )}
        </View>
        <View style={styles.contentContainer}>
          <View>
            <Text style={[styles.title, {color: colors.text}]} numberOfLines={1}>
              {title}
            </Text>
            <View style={styles.subtitleContainer}>
              <View
                style={[
                  styles.statusBadge,
                  {backgroundColor: statusConfig.backgroundColor},
                ]}>
                <Text style={[styles.statusText, {color: statusConfig.textColor}]}>
                  {statusConfig.text}
                </Text>
              </View>
              <Text
                style={[styles.subtitle, {color: colors.unselected}]}
                numberOfLines={1}>
                {subtitle}
              </Text>
            </View>
          </View>
          <View style={styles.bottomInfo}>
            <View style={styles.locationContainer}>
              <Icon name="location-outline" size={14} color={colors.unselected} />
              <Text style={[styles.locationText, {color: colors.unselected}]}>
                {location}
              </Text>
            </View>
            <View style={styles.infoContainer}>
              <View style={styles.leftInfo}>
                <View style={styles.infoItem}>
                  <Icon name="people-outline" size={14} color={colors.unselected} />
                  <Text style={[styles.infoText, {color: colors.unselected}]}>
                    {currentMembers}/{maxMembers}
                  </Text>
                </View>
                <View style={styles.infoItem}>
                  <Icon name="time-outline" size={14} color={colors.unselected} />
                  <Text style={[styles.infoText, {color: colors.unselected}]}>
                    {time}
                  </Text>
                </View>
              </View>
              <View style={styles.rightInfo}>
                <Icon name="heart" size={14} color={colors.unselected} />
                <Text style={[styles.infoText, {color: colors.unselected}]}>
                  {likes}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  imageContainer: {
    marginRight: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: RADIUS.md,
  },
  placeholder: {
    width: 100,
    height: 100,
    borderRadius: RADIUS.md,
    backgroundColor: '#E0E0E0',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  subtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  statusText: {
    fontSize: 11,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 12,
    lineHeight: 18,
    flex: 1,
  },
  bottomInfo: {
    marginTop: 'auto',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  locationText: {
    fontSize: 12,
    marginLeft: 4,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  infoText: {
    fontSize: 12,
    marginLeft: 4,
  },
  rightInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
