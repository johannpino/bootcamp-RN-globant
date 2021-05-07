import React, { useState } from 'react';
import { StyleSheet, Pressable } from 'react-native';

const ColorSquare = ({ color, id, isSelected, selectedHandler }) => {
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
      onPress={() => selectedHandler(id)}
      style={isSelected ? [styles.square, styles.selected] : styles.square}
    />
  );
};

export default ColorSquare;
