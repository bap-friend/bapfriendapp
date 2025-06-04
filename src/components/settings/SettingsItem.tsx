import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useTheme} from '../../hooks/useTheme';

interface SettingsItemProps {
  title: string;
  onPress: () => void;
  color?: string;
  showArrow?: boolean;
}

export const SettingsItem = ({
  title,
  onPress,
  color,
}: SettingsItemProps) => {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: colors.lv1}]}
      onPress={onPress}>
      <Text style={[styles.title, {color: color || colors.text}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
});
