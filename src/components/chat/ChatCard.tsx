import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {RADIUS, COLORS} from '../../constants/design';
import {useTheme} from '../../hooks/useTheme';

interface ChatCardProps {
  title: string;
  imageUrl?: string;
  lastMessage?: string;  // 새로운 prop 추가
  lastMessageTime: string;
  unreadCount?: number;
  style?: object;
  onPress?: () => void; // onPress prop 추가
}

export const ChatCard = ({
  title,
  imageUrl,
  lastMessage = "",  // 기본값 추가
  lastMessageTime,
  unreadCount = 0,
  style,
  onPress, // onPress prop 구조 분해 할당
}: ChatCardProps) => {
  const {colors} = useTheme();

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
          <View style={styles.mainContent}>
            <Text style={[styles.title, {color: colors.text}]} numberOfLines={1}>
              {title}
            </Text>
            <Text style={[styles.message, {color: colors.unselected}]} numberOfLines={1}>
              {lastMessage}
            </Text>
          </View>
          <View style={styles.rightContent}>
            {unreadCount > 0 && (
              <View style={[styles.badge, {backgroundColor: COLORS.red}]}>
                <Text style={styles.badgeText}>{unreadCount}</Text>
              </View>
            )}
            <Text style={[styles.time, {color: colors.unselected}]}>
              {lastMessageTime}
            </Text>
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
    width: 80,
    height: 80,
    borderRadius: RADIUS.md,
  },
  placeholder: {
    width: 80,
    height: 80,
    borderRadius: RADIUS.md,
    backgroundColor: '#E0E0E0',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 8,  // 상단 여백 추가
  },
  mainContent: {
    flex: 1,
    marginRight: 16,
  },
  rightContent: {
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  message: {
    fontSize: 14,
    color: '#666',
  },
  time: {
    fontSize: 12,
    marginTop: 4,
  },
  badge: {
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
    marginBottom: 4,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
});
