import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {SecondaryScreen} from '../common/SecondaryScreen';
import {ChatRoomHeader} from '../../components/chat/ChatRoomHeader';
import {useTheme} from '../../hooks/useTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {RADIUS} from '../../constants/design';

const BottomBar = () => {
  const {colors} = useTheme();
  const insets = useSafeAreaInsets();
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      console.log('Send message:', message);
      setMessage('');
    }
  };

  return (
    <View style={[
      styles.bottomBar,
      {
        backgroundColor: 'white',
        paddingBottom: insets.bottom,
      }
    ]}>
      <View style={styles.bottomBarContent}>
        <TextInput
          style={[styles.input, {
            backgroundColor: colors.border,
            color: colors.text,
          }]}
          placeholder="메시지를 입력하세요"
          placeholderTextColor={colors.unselected}
          value={message}
          onChangeText={setMessage}
          multiline
        />
        <TouchableOpacity 
          style={[
            styles.sendButton,
            {
              backgroundColor: message.trim() ? colors.link : colors.border,
            }
          ]}
          onPress={handleSend}
          disabled={!message.trim()}
        >
          <Icon 
            name="paper-plane" 
            size={20} 
            color={message.trim() ? 'white' : colors.unselected} 
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ChatRoomScreen = () => {
  return (
    <SecondaryScreen header={<ChatRoomHeader />}>
      <View style={styles.container}>
        <Text>채팅방 화면</Text>
      </View>
      <BottomBar />
    </SecondaryScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.1)',
  },
  bottomBarContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    gap: 8,
  },
  input: {
    flex: 1,
    borderRadius: RADIUS.lg,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 15,
    maxHeight: 100,  // 최대 높이 제한
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: RADIUS.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ChatRoomScreen;
