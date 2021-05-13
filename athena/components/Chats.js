import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

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

const Chats = () => (
  <ScrollView style={styles.container}>
    <Text style={styles.title}>Chats</Text>
  </ScrollView>
);

export default Chats;
