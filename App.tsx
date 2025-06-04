import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useStore} from './src/stores/useStore';
import {Alert, useColorScheme} from 'react-native';

import SplashScreen from './src/screens/SplashScreen';
import {TabNavigator} from './src/navigation/TabNavigator';
import SettingsScreen from './src/screens/settings/SettingsScreen';
import NotificationScreen from './src/screens/notification/NotificationScreen';
import SearchScreen from './src/screens/search/SearchScreen';
import CreateMeetingScreen from './src/screens/meeting/CreateMeetingScreen';

import {
  CardStyleInterpolators,
  createStackNavigator,
  TransitionSpecs,
} from '@react-navigation/stack';
import ProfileEditScreen from './src/screens/mypage/ProfileEditScreen';


const Stack = createStackNavigator();

function App(): React.JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const deviceTheme = useColorScheme();
  const {setTheme} = useStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    useStore.getState().initialize();
  }, []);

  useEffect(() => {
    // 앱 시작 시 디바이스 테마 감지 및 적용
    if (deviceTheme) {
      // 알림창으로 디바이스의 테마 알려줌 (Console.log 말고)
      Alert.alert(
        '디바이스 테마',
        `현재 디바이스 테마는 ${deviceTheme}입니다.`,
        [{text: '확인', style: 'default'}],
      );
      setTheme(deviceTheme);
    }
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
          }}>
          {isLoading ? (
            <Stack.Screen name="Splash" component={SplashScreen} />
          ) : (
            <>
              <Stack.Screen name="Main" component={TabNavigator} />
              <Stack.Screen name="Settings" component={SettingsScreen} />
              <Stack.Screen name="Notifications" component={NotificationScreen} />
              <Stack.Screen name="Search" component={SearchScreen} />
              <Stack.Screen name="CreateMeeting" component={CreateMeetingScreen} 
                  options={{
                  gestureEnabled: true,
                  gestureDirection: 'vertical', // 아래에서 위로
                  transitionSpec: {
                    open: TransitionSpecs.TransitionIOSSpec,
                    close: TransitionSpecs.TransitionIOSSpec,
                  },
                  cardStyleInterpolator: ({ current, layouts }) => {
                    return {
                      cardStyle: {
                        transform: [
                          {
                            translateY: current.progress.interpolate({
                              inputRange: [0, 1],
                              outputRange: [layouts.screen.height, 0],
                            }),
                          },
                        ],
                      },
                    };
                  },
                }}
              />
              <Stack.Screen name="ProfileEdit" component={ProfileEditScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
