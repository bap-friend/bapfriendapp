import React, {ReactNode} from 'react';
import {View, StyleSheet} from 'react-native';
import {useTheme} from '../../hooks/useTheme';
import {RADIUS} from '../../constants/design';

interface RoundedCardProps {
  children: ReactNode;
  style?: object;
}

export const RoundedCard = ({children, style}: RoundedCardProps) => {
  const {colors} = useTheme();

  return (
    <View style={[
      styles.card,
      {backgroundColor: colors.lv1},
      style
    ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: RADIUS.lg,
    padding: 16,
    marginVertical: 8,
  },
});
