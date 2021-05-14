import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Item from './Item';

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 30,
  },
  secondary: {
    fontSize: 22,
    color: 'white',
  },
  displayItems: {
    borderRadius: 6,
    marginTop: 8,
    marginBottom: 16,
    backgroundColor: '#D4D4D4',
  },
});

const DisplayProjects = ({ title, items }) => {
  if (!items || items === '') return null;
  return (
    <View style={styles.itemContainer}>
      {title ? <Text style={styles.secondary}>{title}</Text> : null}
      <View style={styles.displayItems}>
        {items.map((item) => (
          <Item isProject key={item.key} item={item} />
        ))}
      </View>
    </View>
  );
};

DisplayProjects.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.instanceOf(Array).isRequired,
};

export default DisplayProjects;
