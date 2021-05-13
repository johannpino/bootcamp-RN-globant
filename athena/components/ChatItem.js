/* eslint-disable object-curly-newline */
import React, { useContext } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import PropTypes from 'prop-types';
import {
  getFirstLetter,
  getProjectMessages,
  limitChar,
} from '../utils/helpers';
import * as RootNavigation from '../utils/RootNavigation';
import NavbarContext from '../context/navbar/navbarContext';
import FireBaseContext from '../context/firebase/firebaseContext';

const styles = StyleSheet.create({
  item: {
    padding: 12,
    flexDirection: 'row',
  },
  initial: {
    fontSize: 24,
    color: '#1B1B1B',
  },
  info: {
    maxWidth: '100%',
    marginLeft: 12,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
  secondary: {
    maxWidth: '100%',
    fontSize: 14,
    color: 'white',
  },
  date: {
    opacity: 0.4,
    fontSize: 12,
    color: 'white',
  },
  center: {
    alignItems: 'center',
  },
  separator: {
    opacity: 0.1,
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1,
    width: '90%',
  },
  preview: {
    width: '80%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

const ChatItem = ({ item }) => {
  const { name, color, key } = item;

  const { setNavbarHidden } = useContext(NavbarContext);
  const { messages } = useContext(FireBaseContext);

  const circle = {
    height: 44,
    width: 44,
    backgroundColor: color,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 48,
  };

  if (!messages) return null;
  if (item.owners.length < 2) return null;

  const lastMessage = getProjectMessages(messages, key).slice(-1).pop();
  let dateObj;
  if (lastMessage) {
    // eslint-disable-next-line no-unused-vars
    dateObj = new Date(lastMessage.date);
  }
  return (
    <View>
      <Pressable
        onPress={() => {
          setNavbarHidden(true);
          RootNavigation.navigate('Chat', { item });
        }}
        style={styles.item}
      >
        <View style={circle}>
          <Text style={styles.initial}>{getFirstLetter(name)}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.secondary}>
            {lastMessage
              ? `${lastMessage.name}: ${limitChar(18, lastMessage.text)}`
              : null}
          </Text>
        </View>
      </Pressable>
      <View style={styles.center}>
        <View style={styles.separator} />
      </View>
    </View>
  );
};

ChatItem.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
};

export default ChatItem;
