import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {PrimaryScreen} from '../common/PrimaryScreen';
import {ChatHeader} from '../../components/chat/ChatHeader';
import {ChatCard} from '../../components/chat/ChatCard';
import {useAppNavigation} from '../../hooks/useAppNavigation';

const ChatScreen = () => {
  const navigation = useAppNavigation();

  const handleChatPress = () => {
    navigation.navigate('ChatRoom');
  };

  return (
    <PrimaryScreen header={<ChatHeader />}>
      <ScrollView>
        <View style={styles.contentContainer}>
          <ChatCard
            title="신촌 치맥 모임방"
            lastMessage="오늘 7시에 만나요!"
            lastMessageTime="1시간 전"
            unreadCount={3}
            onPress={handleChatPress}
          />
          <ChatCard
            title="한강 피크닉 모임"
            lastMessage="오늘 7시에 만나요!"
            lastMessageTime="3시간 전"
            unreadCount={1}
            onPress={handleChatPress}
          />
          <ChatCard
            title="강남 맛집 탐방"
            lastMessage="오늘 7시에 만나요!"
            lastMessageTime="어제"
            onPress={handleChatPress}
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
});

export default ChatScreen;
