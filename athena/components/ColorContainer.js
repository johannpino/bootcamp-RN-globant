import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import ColorSquare from './ColorSquare';

const styles = StyleSheet.create({
  colorContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 18,
    height: 180,
    maxWidth: '100%',
  },
});
const ColorContainer = ({ colors }) => {
  const [stateColors, setStateColors] = useState(colors);
  const [selectedColor, setSelectedcolor] = useState(1);

  const selectedHandler = (id) => {
    setSelectedcolor(id);
  };

  useEffect(() => {}, [selectedColor]);

  return (
    <View style={styles.colorContainer}>
      {stateColors.map((color) => (
        <ColorSquare
          key={color.color}
          color={color.color}
          id={color.id}
          isSelected={color.id === selectedColor}
          selectedHandler={selectedHandler}
        />
      ))}
    </View>
  );
};

export default ColorContainer;
