import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Item from './Item';

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

const DisplayTasks = ({ title, items }) => {
  if (!items) return null;
  return (
    <View>
      {title ? <Text style={styles.secondary}>{title}</Text> : null}
      <View style={styles.displayItems}>
        {items.map((item) => {
          const { name, project, projectColor, key } = item;
          return (
            <Item
              isProject={false}
              title={name}
              secondary={project}
              color={projectColor}
              key={key}
            />
          );
        })}
      </View>
    </View>
  );
};

DisplayTasks.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.instanceOf(Array).isRequired,
};

export default DisplayTasks;
