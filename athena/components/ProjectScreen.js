/* eslint-disable max-len */
import React, { useContext, useEffect, useState } from 'react';
import {
  View, Text, Pressable, ScrollView, StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { rgba } from 'polished';
import FireBaseContext from '../context/firebase/firebaseContext';
import { getCurrentProject } from '../utils/helpers';
import ShowTasks from './ShowTasks';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
  },
  title: {
    textAlign: 'center',
    marginTop: 24,
    marginBottom: 24,
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
  },
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
    padding: 20,
    alignItems: 'center',
  },
  taskText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1B1B1B',
    width: '85%',
  },
  taskSelectorTitle:{
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 22,
    opacity: 1,
    marginBottom: 8,
  },
});

const ProjectScreen = ({ route, navigation }) => {
  const firebaseContext = useContext(FireBaseContext);
  const { projects } = firebaseContext;
  const {
    name, key, color, owner, tasksRemaining,
  } = getCurrentProject(
    projects,
    route.params.id,
  )[0];


  return (
    <ScrollView>
      <LinearGradient
        style={styles.container}
        colors={[color, rgba(color, 0)]}
      >
        <Pressable onPress={() => navigation.navigate('Projects')}>
          <Icon name="arrow-back-outline" size={44} color="#FFFFFF" />
        </Pressable>
        <Text style={styles.title}>{name}</Text>
        <ShowTasks color={color}/>
      </LinearGradient>
    </ScrollView>
  );
};

export default ProjectScreen;
