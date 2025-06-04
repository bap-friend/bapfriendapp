import React, {ReactNode, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from '../../hooks/useTheme';
import {useNavigation} from '@react-navigation/native';

interface FormScreenProps {
  header: ReactNode;
  children: ReactNode;
}

export const FormScreen = ({header, children}: FormScreenProps) => {
  const {colors} = useTheme();
  const navigation = useNavigation();

  // 스와이프 뒤로가기 비활성화
  useEffect(() => {
    navigation.setOptions({
      gestureEnabled: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView
      style={[styles.safeArea, {backgroundColor: colors.background}]}
      edges={['top']}>
      <View style={styles.container}>
        {header}
        <View style={[styles.content, {backgroundColor: colors.background}]}>
          {children}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 16,
  },
});
