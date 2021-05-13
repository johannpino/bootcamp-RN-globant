import React, { useContext } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import DisplayChats from './DisplayChats';
import FireBaseContext from '../context/firebase/firebaseContext';
import { getUserProjects } from '../utils/helpers';

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
});

const Chats = () => {
  const { projects, user } = useContext(FireBaseContext);
  const items = getUserProjects(projects, user.email);
  items.sort((a, b) => b.lastUpdated - a.lastUpdated);
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Chats</Text>
      <DisplayChats items={items} />
    </ScrollView>
  );
};

export default Chats;
