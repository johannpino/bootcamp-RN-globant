/* eslint-disable object-curly-newline */
import React, { useEffect, useContext } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import PropTypes from 'prop-types';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import { getFirstLetter } from '../utils/helpers';
import * as RootNavigation from '../utils/RootNavigation';
import NavbarContext from '../context/navbar/navbarContext';
import FireBaseContext from '../context/firebase/firebaseContext';
import { getProjectMessages, limitChar } from '../utils/helpers';

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
    marginLeft: 12,
  },
  title: {
    fontSize: 18,
    color: 'white',
  },
  secondary: {
    fontSize: 14,
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
});

const Item = ({ item }) => {
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

  const offset = useSharedValue(1);

  useEffect(() => {
    offset.value = 0;
    return () => {
      offset.value = 10;
    };
  }, []);

  if (!messages) return null;
  const dateObj = new Date(item.date);
  if (item.owners.length < 2) return null;

  const lastMessage = getProjectMessages(messages, key).slice(-1).pop();
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
              ? `${lastMessage.name}: ${limitChar(
                  22,
                  lastMessage.text
                )} • ${dateObj.getHours()}:${dateObj.getMinutes()}`
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

Item.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
};

export default Item;
