import React, { useState, useContext } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Pressable, Text, StyleSheet } from 'react-native';
import FireBaseContext from '../context/firebase/firebaseContext';

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
  showTasksView: {
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

const ShowTasks = ({ color }) => {
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
      <View style={styles.showTasksView}>
        {tasks.map((task) => {
          const { name } = task;
          return (
            <View style={styles.task}>
              <Text style={styles.taskText}>{task.name}</Text>
              <Icon name="ellipse-outline" size={24} color={color} />
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default ShowTasks;
