import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableHighlight, Button } from 'react-native';
import Item from './Item';
import DisplayProjects from './DisplayProjects';
import DisplayTasks from './DisplayTasks';
import FireBaseContext from '../context/firebase/firebaseContext';
import AuthContext from '../context/auth/authContext';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';

const Home = () => {
  const authContext = useContext(AuthContext);
  const { logout, userName } = authContext;
  const firebaseContext = useContext(FireBaseContext);
  const { projects, getProjects, tasks, getTasks } = firebaseContext;

  useEffect(() => {
    getProjects();
    getTasks();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{` Welcome,${'\n'} ${userName}`}</Text>
      <DisplayTasks title={'Recent tasks...'} items={tasks} />
      <DisplayProjects title={'Your projects'} items={projects} />
      <Button title="logout" onPress={() => logout()}></Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1B1B',
    padding: '5%',
  },
  title: {
    marginTop: 24,
    marginBottom: 24,
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Home;
