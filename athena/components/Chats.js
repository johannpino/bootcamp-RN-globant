import React, { useContext } from 'react';
import { Text, StyleSheet, ScrollView, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DisplayChats from './DisplayChats';
import FireBaseContext from '../context/firebase/firebaseContext';
import { getUserProjects, getUserGroupProjects } from '../utils/helpers';

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
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'normal',
    color: '#969696',
  },
});

const Chats = () => {
  const { projects, user } = useContext(FireBaseContext);
  const items = getUserProjects(projects, user.email);
  items.sort((a, b) => b.lastUpdated - a.lastUpdated);

  if (getUserGroupProjects(projects, user.email).length > 0) {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Chats</Text>
        <DisplayChats items={items} />
      </ScrollView>
    );
  }

  return (
    <View style={styles.warning}>
      <Icon name="people" size={140} color="white" style={styles.icon} />
      <Text style={styles.warningText}>Todavía no tienes chats</Text>
      <Text style={styles.warningTextSubtitle}>
        Agrega un colaborador en un proyecto para empezar un chat
      </Text>
    </View>
  );
};

export default Chats;
