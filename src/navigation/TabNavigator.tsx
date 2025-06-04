import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import ListScreen from '../screens/list/ListScreen';
import ExploreScreen from '../screens/explore/ExploreScreen';
import ChatScreen from '../screens/chat/ChatScreen';
import MyPageScreen from '../screens/mypage/MyPageScreen';
import { useTheme } from '../hooks/useTheme';

const Tab = createBottomTabNavigator();

const ListTabBarIcon = ({ color, size }: { color: string; size: number }) => (
  <Icon name="list" size={size} color={color} />
);

const ExploreTabBarIcon = ({ color, size }: { color: string; size: number }) => (
  <Icon name="compass" size={size} color={color} />
);

const ChatTabBarIcon = ({ color, size }: { color: string; size: number }) => (
  <Icon name="chatbubbles" size={size} color={color} />
);

const MyPageTabBarIcon = ({ color, size }: { color: string; size: number }) => (
  <Icon name="person" size={size} color={color} />
);

export const TabNavigator = () => {
  const insets = useSafeAreaInsets();
  const {colors, theme} = useTheme();

  const bottomPadding = Platform.select({
    ios: insets.bottom,
    android: Math.max(insets.bottom, 16),
  });

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 50 + bottomPadding,
          paddingBottom: bottomPadding,
          backgroundColor: colors.surface,
          borderTopWidth: 0,  // border 제거
          ...(theme === 'light' ? {
            shadowColor: colors.text,
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.06,
            shadowRadius: 8,
            elevation: 8,
          } : {
            shadowColor: 'transparent',
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0,
            shadowRadius: 0,
            elevation: 0,
          }),
        },
        tabBarItemStyle: {
          paddingVertical: 8,
          height: 50,
        },
        tabBarActiveTintColor: colors.selected,
        tabBarInactiveTintColor: colors.unselected,
        tabBarLabelStyle: {
          color: colors.text,
        },
      }}>
      <Tab.Screen
      name="List"
      component={ListScreen}
      options={{
        tabBarLabel: '목록',
        tabBarIcon: ListTabBarIcon,
      }}
      />
      <Tab.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        tabBarLabel: '둘러보기',
        tabBarIcon: ExploreTabBarIcon,
      }}
      />
      <Tab.Screen
      name="Chat"
      component={ChatScreen}
      options={{
        tabBarLabel: '채팅',
        tabBarIcon: ChatTabBarIcon,
      }}
      />
      <Tab.Screen
      name="MyPage"
      component={MyPageScreen}
      options={{
        tabBarLabel: '마이페이지',
        tabBarIcon: MyPageTabBarIcon,
      }}
      />
    </Tab.Navigator>
  );
};
