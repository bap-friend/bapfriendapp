import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useTheme} from '../../hooks/useTheme';
import Icon from 'react-native-vector-icons/Ionicons';

interface PrimaryHeaderProps {
  title?: string;
  rightButton1?: {
    iconName: string;
    onPress: () => void;
  };
  rightButton2?: {
    iconName: string;
    onPress: () => void;
  };
}

export const PrimaryHeader = ({
  title,
  rightButton1,
  rightButton2,
}: PrimaryHeaderProps) => {
  const {colors} = useTheme();

  return (
    <View style={[styles.header, {backgroundColor: colors.lv0}]}>
      <Text style={[styles.title, {color: colors.text}]}>{title}</Text>
      <View style={styles.right}>
        {rightButton1 && (
          <TouchableOpacity
            style={styles.iconButton}
            onPress={rightButton1.onPress}
          >
            <Icon
              name={rightButton1.iconName}
              size={24}
              color={colors.text}
            />
          </TouchableOpacity>
        )}
        {rightButton2 && (
          <TouchableOpacity
            style={styles.iconButton}
            onPress={rightButton2.onPress}
          >
            <Icon
              name={rightButton2.iconName}
              size={24}
              color={colors.text}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    padding: 8,
    marginLeft: 8,
  },
});
