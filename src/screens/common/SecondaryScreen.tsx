import React, {ReactNode} from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from '../../hooks/useTheme';

interface SecondaryScreenProps {
  header: ReactNode;
  children: ReactNode;
}

export const SecondaryScreen = ({header, children}: SecondaryScreenProps) => {
  const {colors} = useTheme();

  return (
    <SafeAreaView 
      style={[styles.safeArea, {backgroundColor: colors.surface}]} 
      edges={['top']}
    >
      <View style={styles.container}>
        {header}
        <View style={[styles.content, {backgroundColor: colors.surface}]}>
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
