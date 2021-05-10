/* eslint-disable object-curly-newline */
import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

import DisplayProjects from './DisplayProjects';
import DisplayTasks from './DisplayTasks';
import FireBaseContext from '../context/firebase/firebaseContext';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

const Home = () => {
  const firebaseContext = useContext(FireBaseContext);
  const { projects, getProjects, tasks, getTasks, user } = firebaseContext;

  useEffect(() => {
    if (Object.keys(user).length > 0) {
      getProjects();
      getTasks();
    }
  }, []);

  return (
    <>
      {user.displayName ? (
        <ScrollView style={styles.container}>
          <Text style={styles.title}>
            {` Bienvenido,${'\n'} ${user.displayName}`}
          </Text>
          <DisplayTasks title="Tareas recientes..." items={tasks} />
          <DisplayProjects title="Tus proyectos" items={projects} />
        </ScrollView>
      ) : (
        <Text style={styles.title}>Loading...</Text> // spiner goes here
      )}
    </>
  );
};

export default Home;
