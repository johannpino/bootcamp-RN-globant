/* eslint-disable object-curly-newline */
import React, { useContext } from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  getUserProyects,
  getUserTasks,
  welcomeText,
  userHasProjects,
} from '../utils/helpers';
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
  icon: {
    color: '#969696',
  },
  warning: {
    marginTop: '30%',
    alignItems: 'center',
  },
  warningText: {
    paddingVertical: 10,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  warningTextSubtitle: {
    paddingVertical: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'normal',
    color: '#969696',
  },
  loading: {
    marginTop: 24,
    marginBottom: 24,
    fontSize: 48,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
});

const Home = () => {
  const firebaseContext = useContext(FireBaseContext);
  const { projects, tasks, user } = firebaseContext;

  const Title = () => (
    <Text style={styles.title}>
      {` ${welcomeText()},${'\n'} ${user.displayName}`}
    </Text>
  );

  if (userHasProjects(projects, user.email)) {
    return (
      <>
        {user.displayName ? (
          <ScrollView style={styles.container}>
            <Title />
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
  }

  return (
    <>
      {user.displayName ? (
        <ScrollView style={styles.container}>
          <Title />
          <View style={styles.warning}>
            <Icon name="flag" size={140} color="white" style={styles.icon} />
          </View>
          <Text style={styles.warningText}>
            Parece que todavía no tienes proyectos
          </Text>
          <Text style={styles.warningTextSubtitle}>
            Has click en el botón de la carpeta para gestionar tus proyectos
          </Text>
        </ScrollView>
      ) : (
        <Text style={styles.loading}>Guardando tus datos...</Text> // spinner goes here
      )}
    </>
  );
};

export default Home;
