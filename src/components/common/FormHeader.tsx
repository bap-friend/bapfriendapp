import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../../hooks/useTheme';

interface FormHeaderProps {
  title: string;
  rightButton1?: {
    iconName: string;
    onPress: () => void;
  };
}

export const FormHeader = ({title, rightButton1}: FormHeaderProps) => {
  const navigation = useNavigation();
  const {colors} = useTheme();

  const handleClose = () => {
    Alert.alert(
      '작성 취소',
      '작성 중인 내용은 사라집니다. 계속하시겠습니까?',
      [
        {
          text: '취소',
          style: 'cancel',
        },
        {
          text: '확인',
          onPress: () => navigation.goBack(),
        },
      ],
    );
  };

  return (
    <View
      style={[
        styles.header,
        {
          backgroundColor: colors.background,
          borderBottomColor: colors.border,
        },
      ]}>
      <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
        <Icon name="close" size={24} color={colors.text} />
      </TouchableOpacity>

      <Text style={[styles.title, {color: colors.text}]}>{title}</Text>

      <View style={styles.right}>
        {/* {rightButton1 && (
          <TouchableOpacity
            style={styles.iconButton}
            onPress={rightButton1.onPress}>
            <Icon name={rightButton1.iconName} size={24} color={colors.text} />
          </TouchableOpacity>
        )} */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  closeButton: {
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
  },
  right: {
    width: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButton: {
    padding: 8,
  },
});
