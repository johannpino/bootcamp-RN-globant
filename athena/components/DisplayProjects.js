/* eslint-disable no-underscore-dangle */
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

const formatDescription = (tasksRemaining) => {
  if (tasksRemaining === 0) {
    return 'No hay tareas';
  }
  if (tasksRemaining === 1) {
    return `${tasksRemaining} tarea pendientes`;
  }
  if (tasksRemaining > 99) {
    return '+99 tarea pendientes';
  }
  return `${tasksRemaining} tareas pendientes`;
};

const DisplayProjects = ({ title, items }) => {
  if (!items || items === '') return null;
  return (
    <View style={styles.itemContainer}>
      {title ? <Text style={styles.secondary}>{title}</Text> : null}
      <View style={styles.displayItems}>
        {items.map((item) => {
          const { name, tasksRemaining, color } = item._data;
          const id = item._ref._documentPath._parts[1];
          return (
            <Item
              isProject
              title={name}
              secondary={formatDescription(tasksRemaining)}
              color={String(color)}
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
