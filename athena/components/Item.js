/* eslint-disable object-curly-newline */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const getFirstLetter = (string) => string.charAt(0);

const styles = StyleSheet.create({
  item: {
    padding: 12,
    flexDirection: 'row',
  },
  initial: {
    fontSize: 24,
    color: '#1B1B1B',
  },
  info: {
    marginLeft: 12,
  },
  title: {
    fontSize: 18,
    color: '#1B1B1B',
  },
  secondary: {
    fontSize: 14,
    color: '#4E4E4E',
  },
});

const Item = ({ isProject, title, secondary, color }) => {
  const circle = {
    height: 44,
    width: 44,
    backgroundColor: color,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 48,
  };

  const notCircle = {
    height: 44,
    width: 44,
    backgroundColor: color,
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <View style={styles.item}>
      <View style={isProject ? notCircle : circle}>
        <Text style={styles.initial}>
          {isProject ? getFirstLetter(title) : getFirstLetter(secondary)}
        </Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.secondary}>{secondary}</Text>
      </View>
    </View>
  );
};

export default Item;
