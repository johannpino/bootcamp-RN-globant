import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Item from './Item';

const DisplayTasks = ({ title, items }) => {
  if (!items) return null;
  return (
    <View>
      {title ? <Text style={styles.secondary}>{title}</Text> : null}
      <View style={styles.displayItems}>
        {items.map((item, index) => {
          return (
            <Item
              isProject={false}
              title={item._data.name}
              secondary={item._data.project}
              color={item._data.projectColor}
              key={index}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  secondary: {
    fontSize: 24,
    color: 'white',
  },
  displayItems: {
    borderRadius: 6,
    marginTop: 8,
    marginBottom: 16,
    backgroundColor: '#D4D4D4',
  },
});

export default DisplayTasks;
