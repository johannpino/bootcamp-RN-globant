/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
import React, { useEffect, useContext } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import PropTypes from 'prop-types';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import {
  formatDescription,
  getFirstLetter,
  getProjectTasks,
} from '../utils/helpers';
import * as RootNavigation from '../utils/RootNavigation';
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
    marginLeft: 12,
  },
  title: {
    fontSize: 18,
    color: '#1B1B1B',
  },
  secondary: {
    fontSize: 14,
    color: '#4E4E4E',
  },
});

const Item = ({ isProject, item }) => {
  const { tasks } = useContext(FireBaseContext);
  const { name, color } = item;
  let secondary;
  if (isProject) {
    secondary = formatDescription(
      getProjectTasks(tasks, item.key, false).length
    );
  } else {
    secondary = item.projectName;
  }
  const circle = {
    height: 44,
    width: 44,
    backgroundColor: color,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 48,
  };

  const notCircle = {
    height: 44,
    width: 44,
    backgroundColor: color,
    justifyContent: 'center',
    alignItems: 'center',
  };
  const offset = useSharedValue(1);

  useEffect(() => {
    offset.value = 0;
    return () => {
      offset.value = 10;
    };
  }, []);

  const customSpringStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withSpring(offset.value * 255, {
          damping: 20,
          stiffness: 90,
        }),
      },
    ],
  }));

  return (
    <Animated.View style={customSpringStyles}>
      <Pressable
        onPress={() => {
          RootNavigation.navigate('ProjectScreen', {
            ...item,
            isProject,
          });
        }}
        style={styles.item}
      >
        <View style={isProject ? notCircle : circle}>
          <Text style={styles.initial}>
            {isProject ? getFirstLetter(name) : getFirstLetter(secondary)}
          </Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.secondary}>{secondary}</Text>
        </View>
      </Pressable>
    </Animated.View>
  );
};

Item.propTypes = {
  isProject: PropTypes.bool.isRequired,
  item: PropTypes.instanceOf(Object).isRequired,
};

export default Item;
