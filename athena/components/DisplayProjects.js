/* eslint-disable no-underscore-dangle */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Item from './Item';

const styles = StyleSheet.create({
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
  if (!items) return null;
  return (
    <View>
      {title ? <Text style={styles.secondary}>{title}</Text> : null}
      <View style={styles.displayItems}>
        {items.map((item) => {
          const { name, tasksRemaining, color } = item._data;
          const id = item._ref._documentPath._parts[1];
          return (
            <Item
              isProject
              title={name}
              secondary={`${tasksRemaining > 100 ? '99+' : tasksRemaining} ${
                tasksRemaining > 1 ? 'tasks' : 'task'
              } remaining`}
              color={color}
              key={id}
            />
          );
        })}
      </View>
    </View>
  );
};

DisplayProjects.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.instanceOf(Array).isRequired,
};

export default DisplayProjects;
