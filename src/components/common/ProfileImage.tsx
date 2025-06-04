import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {useTheme} from '../../hooks/useTheme';

interface ProfileImageProps {
  size?: number;
  imageUrl?: string;
}

export const ProfileImage = ({size = 48, imageUrl}: ProfileImageProps) => {
  const {colors} = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          width: size,
          height: size,
          borderColor: colors.border,
        },
      ]}>
      {imageUrl ? (
        <Image
          source={{uri: imageUrl}}
          style={[styles.image, {width: size, height: size}]}
        />
      ) : (
        <View
          style={[
            styles.placeholder,
            {width: size, height: size, backgroundColor: colors.border},
          ]}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 999,
    overflow: 'hidden',
  },
  image: {
    borderRadius: 999,
  },
  placeholder: {
    borderRadius: 999,
  },
});
