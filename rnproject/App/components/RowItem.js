import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    color: colors.text,
    fontWeight: 'bold',
  },
  separator: {
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
    marginLeft: 15,
  },
});

export const RowItem = ({rightIcon, text, onPress}) => {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
      {rightIcon}
    </TouchableOpacity>
  );
};

export const RowSeparator = () => <View style={styles.separator} />;
