import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../../hooks/useTheme';

interface SecondaryHeaderProps {
  title: string;
  rightButton1?: {
    iconName: string;
    onPress: () => void;
  };
  rightButton2?: {
    iconName: string;
    onPress: () => void;
  };
}

export const SecondaryHeader = ({
  title,
  rightButton1,
  rightButton2,
}: SecondaryHeaderProps) => {
  const navigation = useNavigation();
  const {colors} = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <View style={[
      styles.headerContainer,
      {
        backgroundColor: colors.lv1,
        paddingTop: insets.top,
      },
    ]}>
      <View style={[
        styles.header,
      ]}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="chevron-back" size={24} color={colors.text} />
        </TouchableOpacity>
        
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
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
  },
  header: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginHorizontal: 16,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 56,
    justifyContent: 'flex-end',
    paddingRight: 8,
  },
  iconButton: {
    padding: 8,
    marginLeft: 8,
  },
});
