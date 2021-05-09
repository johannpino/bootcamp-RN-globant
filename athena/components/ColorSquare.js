import React from 'react';
import { StyleSheet, Pressable } from 'react-native';

const ColorSquare = ({ color, isSelected, selectedHandler }) => {
  const styles = StyleSheet.create({
    square: {
      height: 56,
      width: 56,
      borderRadius: 6,
      backgroundColor: color,
      justifyContent: 'center',
      margin: 12,
      alignItems: 'center',
    },
    selected: {
      borderWidth: 6,
      borderColor: '#FFFFFF',
    },
  });
  return (
    <Pressable
      onPress={() => selectedHandler(color)}
      style={isSelected ? [styles.square, styles.selected] : styles.square}
    />
  );
};

export default ColorSquare;
