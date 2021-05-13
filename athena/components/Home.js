/* eslint-disable object-curly-newline */
import React, { useContext } from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  getUserProjects,
  getUserTasks,
  welcomeText,
  userHasProjects,
  userHasTasks,
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
    fontSize: 44,
    fontWeight: 'bold',
    color: 'white',
  },
  icon: {
    color: '#969696',
  },
  warning: {
    marginTop: '10%',
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
      {`${welcomeText()},${'\n'}${user.displayName}`}
    </Text>
  );

  if (userHasProjects(projects, user.email)) {
    return (
      <ScrollView style={styles.container}>
        <Title />
        {userHasTasks(tasks, user.email) ? (
          <DisplayRecentTasks
            title="Tareas recientes..."
            items={getUserTasks(tasks, user.email)}
          />
        ) : null}
        <DisplayProjects
          title="Tus proyectos"
          items={getUserProjects(projects, user.email)}
        />
      </ScrollView>
    );
  }

  return (
    <>
      {user.displayName ? (
        <ScrollView style={styles.container}>
          <Title />
          <View style={styles.warning}>
            <Icon name="flag" size={120} color="white" style={styles.icon} />
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
