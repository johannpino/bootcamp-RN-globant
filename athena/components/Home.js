/* eslint-disable object-curly-newline */
import React, { useContext } from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { getUserProyects, getUserTasks } from '../utils/helpers';
import DisplayProjects from './DisplayProjects';
import DisplayRecentTasks from './DisplayRecentTasks';
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
  const { projects, tasks, user } = firebaseContext;

  return (
    <>
      {user ? (
        <ScrollView style={styles.container}>
          <Text style={styles.title}>
            {` Bienvenido,${'\n'} ${user.displayName}`}
          </Text>
          <DisplayRecentTasks
            title="Tareas recientes..."
            items={getUserTasks(tasks, user.email)}
          />
          <DisplayProjects
            title="Tus proyectos"
            items={getUserProyects(projects, user.email)}
          />
        </ScrollView>
      ) : (
        <Text style={styles.title}>Loading...</Text> // spiner goes here
      )}
    </>
  );
};

export default Home;
