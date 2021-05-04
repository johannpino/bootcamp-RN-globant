import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableHighlight } from 'react-native';
import Item from './Item';
import DisplayItems from './DisplayItems';
import FireBaseContext from '../context/firebase/firebaseContext';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';

const Home = () => {
  const firebaseContext = useContext(FireBaseContext);
  const { projects, getProjects, tasks, getTasks } = firebaseContext;
  console.log(projects);
  console.log(tasks);

  useEffect(() => {
    getProjects();
    getTasks();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Welcome,{'\n'}Person.</Text>
      <DisplayItems title={'Recent tasks...'} isProject={false} items={tasks} />
      <DisplayItems title={'Your projects'} isProject={true} items={projects} />
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
