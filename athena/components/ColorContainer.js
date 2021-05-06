import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ColorSquare from './ColorSquare';

const styles = StyleSheet.create({
  colorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 36,
    height: 180,
    maxWidth: '100%',
    width: '80%',
  },
  colorRow: {
    flexDirection: 'row',
  },
});
const ColorContainer = ({ colors }) => {
  const [stateColors, setStateColors] = useState(colors);

  const selectedHandler = (id) => {
    alert(id);
  };

  return (
    <View style={styles.colorContainer}>
      <View style={styles.colorRow}>
        {stateColors.map((color) => (
          <ColorSquare
            key={color.color}
            color={color.color}
            id={color.id}
            isSelected={color.isSelected}
            selectedHandler={selectedHandler}
          />
        ))}
      </View>
    </View>
  );
};

export default ColorContainer;
