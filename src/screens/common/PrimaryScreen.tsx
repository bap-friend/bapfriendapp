import React, {ReactNode} from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from '../../hooks/useTheme';

interface PrimaryScreenProps {
  header: ReactNode;
  children: ReactNode;
  floatingButton?: ReactNode;
}

export const PrimaryScreen = ({
  header,
  children,
  floatingButton,
}: PrimaryScreenProps) => {
  const {colors} = useTheme();

  return (
    <SafeAreaView 
      style={[styles.safeArea, {backgroundColor: colors.background}]} 
      edges={['top']}
    >
      <View style={styles.container}>
        {header}
        <View style={[styles.content, {backgroundColor: colors.background}]}>
          {children}
        </View>
        {floatingButton}
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
    // padding: 16, // 본문영역 패딩
  },
});
