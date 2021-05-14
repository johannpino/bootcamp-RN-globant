import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import PropTypes from 'prop-types';

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

ColorSquare.propTypes = {
  color: PropTypes.instanceOf(Object).isRequired,
  selectedHandler: PropTypes.instanceOf(Function).isRequired,
  isSelected: PropTypes.instanceOf(Boolean).isRequired,
};
export default ColorSquare;
