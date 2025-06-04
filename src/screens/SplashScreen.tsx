import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTheme} from '../hooks/useTheme';

const SplashScreen = () => {
  const {colors} = useTheme();

  return (
    <View style={[styles.container, {backgroundColor: colors.lv0}]}>
      <Text style={[styles.text, {color: colors.text}]}>밥친구</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default SplashScreen;