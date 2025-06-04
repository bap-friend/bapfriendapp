import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {RoundedCard} from '../common/RoundedCard';
import Icon from 'react-native-vector-icons/Ionicons';
import {useTheme} from '../../hooks/useTheme';

interface ListItem {
  title: string;
  iconName: string;
  onPress: () => void;
}

interface ListCardProps {
  title?: string;
  items: ListItem[];
}

export const ButtonListCard = ({title, items}: ListCardProps) => {
  const {colors} = useTheme();

  return (
    <RoundedCard>
      {title && (
        <Text style={[styles.cardTitle, {color: colors.text}]}>{title}</Text>
      )}
      {items.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.listItem}
          onPress={item.onPress}>
          <View style={styles.listItemLeft}>
            <Icon name={item.iconName} size={20} color={colors.unselected} />
            <Text style={[styles.listItemText, {color: colors.text}]}>
              {item.title}
            </Text>
          </View>
          <Icon name="chevron-forward" size={20} color={colors.unselected} />
        </TouchableOpacity>
      ))}
    </RoundedCard>
  );
};

const styles = StyleSheet.create({
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  listItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 15,
    marginLeft: 12,
  },
});