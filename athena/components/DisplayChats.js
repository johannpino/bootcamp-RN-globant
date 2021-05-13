import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import ChatItem from './ChatItem';

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
  },
});

const DisplayChats = ({ items }) => {
  if (!items || items === '') return null;
  return (
    <View style={styles.itemContainer}>
      <View style={styles.displayItems}>
        {items.map((item) => (
          <ChatItem key={item.key} item={item} />
        ))}
      </View>
    </View>
  );
};

DisplayChats.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.instanceOf(Array).isRequired,
};

export default DisplayChats;
