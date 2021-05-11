/* eslint-disable object-curly-newline */
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import PropTypes from 'prop-types';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import { getFirstLetter } from '../utils/helpers';
import * as RootNavigation from '../utils/RootNavigation';

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

const Item = ({ isProject, title, secondary, color, id }) => {
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

  const defaultSpringStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: withSpring(offset.value * 255) }],
  }));

  return (
    <Animated.View style={defaultSpringStyles}>
      <Pressable
        onPress={() => RootNavigation.navigate('ProjectScreen', { id })}
        style={styles.item}
      >
        <View style={isProject ? notCircle : circle}>
          <Text style={styles.initial}>
            {isProject ? getFirstLetter(title) : getFirstLetter(secondary)}
          </Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.secondary}>{secondary}</Text>
        </View>
      </Pressable>
    </Animated.View>
  );
};

Item.propTypes = {
  isProject: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  secondary: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Item;
