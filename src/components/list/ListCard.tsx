import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {RADIUS} from '../../constants/design';

interface ListCardProps {
  title: string;
  subtitle: string;
  imageUrl?: string;
  style?: object;
  titleColor?: string;
  subtitleColor?: string;
}

export const ListCard = ({
  title,
  subtitle,
  imageUrl,
  style,
  titleColor,
  subtitleColor,
}: ListCardProps) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.imageContainer}>
        {imageUrl ? (
          <Image source={{uri: imageUrl}} style={styles.image} />
        ) : (
          <View style={styles.placeholder} />
        )}
      </View>
      <View style={styles.contentContainer}>
        <Text style={[styles.title, {color: titleColor}]} numberOfLines={1}>
          {title}
        </Text>
        <Text style={[styles.subtitle, {color: subtitleColor}]} numberOfLines={2}>
          {subtitle}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: 12,
    paddingTop: 12,
  },
  imageContainer: {
    marginRight: 16,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: RADIUS.md,
  },
  placeholder: {
    width: 120,
    height: 120,
    borderRadius: RADIUS.md,
    backgroundColor: '#E0E0E0',
  },
  contentContainer: {
    paddingTop: 8,
    flex: 1,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
  },
});
