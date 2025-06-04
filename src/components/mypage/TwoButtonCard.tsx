import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {RoundedCard} from '../common/RoundedCard';
import Icon from 'react-native-vector-icons/Ionicons';
import {useTheme} from '../../hooks/useTheme';

interface TwoButtonCardProps {
  leftButton: {
    title: string;
    iconName: string;
    onPress: () => void;
  };
  rightButton: {
    title: string;
    iconName: string;
    onPress: () => void;
  };
}

export const TwoButtonCard = ({leftButton, rightButton}: TwoButtonCardProps) => {
  const {colors} = useTheme();

  return (
    <RoundedCard>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={leftButton.onPress}>
          <View style={styles.buttonContent}>
            <Icon
              name={leftButton.iconName}
              size={24}
              color={colors.unselected}
              style={styles.icon}
            />
            <Text style={[styles.buttonText, {color: colors.text}]}>
              {leftButton.title}
            </Text>
          </View>
        </TouchableOpacity>
        <View style={[styles.divider, {backgroundColor: colors.border}]} />
        <TouchableOpacity
          style={styles.button}
          onPress={rightButton.onPress}>
          <View style={styles.buttonContent}>
            <Icon
              name={rightButton.iconName}
              size={24}
              color={colors.unselected}
            />
            <Text style={[styles.buttonText, {color: colors.text}]}>
              {rightButton.title}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </RoundedCard>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',  // 가운데 정렬 추가
  },
  icon: {
    width: 24,  // 아이콘 너비 고정
  },
  buttonText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '500',
  },
  divider: {
    width: 1,
    marginVertical: 12,
  },
});