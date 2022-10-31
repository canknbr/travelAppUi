import React from 'react';
import {StyleSheet, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../data/colors';

const categoryIcons = [
  <Icon name="flight" size={25} color={COLORS.primary} />,
  <Icon name="beach-access" size={25} color={COLORS.primary} />,
  <Icon name="near-me" size={25} color={COLORS.primary} />,
  <Icon name="place" size={25} color={COLORS.primary} />,
];
const ListCategories = () => {
  return (
    <View style={style.categoryContainer}>
      {categoryIcons.map((icon, index) => (
        <View key={index} style={style.iconContainer}>
          {icon}
        </View>
      ))}
    </View>
  );
};

export const style = StyleSheet.create({
  categoryContainer: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    height: 60,
    width: 60,
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

export default ListCategories;
