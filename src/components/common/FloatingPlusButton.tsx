import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../constants/design';

interface FloatingPlusButtonProps {
  onPress: () => void;
}

export const FloatingPlusButton = ({onPress}: FloatingPlusButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.8}  // 터치 시 약간 투명해지는 효과
    >
      <Icon name="add" size={24} color={COLORS.text.primary} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
