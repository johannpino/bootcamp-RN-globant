import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import DisplayChats from '../components/DisplayChats';
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
});

const Chats = () => {
  const { projects } = useContext(FireBaseContext);
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Chats</Text>
      <DisplayChats items={projects} />
    </ScrollView>
  );
};

export default Chats;
