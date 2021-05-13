import React, { useState, useContext, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
// eslint-disable-next-line object-curly-newline
import { View, Pressable, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

import FireBaseContext from '../context/firebase/firebaseContext';
import { getProjectTasks } from '../utils/helpers';
import { updateDocument } from '../utils/firebase';

const styles = StyleSheet.create({
  taskSelectorView: {
    width: '100%',
    flexDirection: 'row',
  },
  taskSelectorText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
    opacity: 0.25,
  },
  taskSelectorActivated: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
    opacity: 1,
  },
  taskSelectorPressable: {
    flex: 1,
  },
  DisplayProjectTasksView: {
    backgroundColor: '#D4D4D4',
    borderRadius: 8,
    marginTop: 8,
  },
  task: {
    flexDirection: 'row',
    padding: 18,
    alignItems: 'center',
  },
  taskText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1B1B1B',
    width: '85%',
  },
  taskSelectorTitle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 22,
    opacity: 1,
    marginBottom: 8,
  },
});

const DisplayProjectTasks = ({ color, projectId }) => {
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

  const [incomplete, setInclomplete] = useState(true);

  const firebaseContext = useContext(FireBaseContext);
  const { tasks } = firebaseContext;

  return (
    <View>
      <Text style={styles.taskSelectorTitle}>Tareas</Text>
      <View style={styles.taskSelectorView}>
        <Pressable
          style={styles.taskSelectorPressable}
          onPress={() => setInclomplete(!incomplete)}
        >
          <Text
            style={
              incomplete
                ? styles.taskSelectorActivated
                : styles.taskSelectorText
            }
          >
            Sin completar
          </Text>
        </Pressable>
        <Pressable
          style={styles.taskSelectorPressable}
          onPress={() => setInclomplete(!incomplete)}
        >
          <Text
            style={
              incomplete
                ? styles.taskSelectorText
                : styles.taskSelectorActivated
            }
          >
            Completadas
          </Text>
        </Pressable>
      </View>
      <Animated.View style={customSpringStyles}>
        <View style={styles.DisplayProjectTasksView}>
          {getProjectTasks(tasks, projectId, !incomplete).map((task) => {
            const { name, key, completed } = task;
            return (
              <Pressable
                key={key}
                style={styles.task}
                onPress={
                  () =>
                    // eslint-disable-next-line implicit-arrow-linebreak
                    updateDocument('tasks', key, { completed: !completed })
                  // eslint-disable-next-line react/jsx-curly-newline
                }
              >
                <Text style={styles.taskText}>{name}</Text>
                <Icon
                  name={completed ? 'ellipse' : 'ellipse-outline'}
                  size={24}
                  color={color}
                />
              </Pressable>
            );
          })}
        </View>
      </Animated.View>
    </View>
  );
};

DisplayProjectTasks.propTypes = {
  color: PropTypes.string.isRequired,
  projectId: PropTypes.string.isRequired,
};

export default DisplayProjectTasks;
