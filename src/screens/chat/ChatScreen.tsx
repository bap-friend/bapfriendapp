import React from 'react';
import {Text} from 'react-native';
import {ChatHeader} from '../../components/chat/ChatHeader';
import {PrimaryScreen} from '../common/PrimaryScreen';

const ChatScreen = () => {
  return (
    <PrimaryScreen header={<ChatHeader />}>
      <Text>채팅 화면</Text>
    </PrimaryScreen>
  );
};

export default ChatScreen;
