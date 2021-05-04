import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

const Profile = () => {
  return <ScrollView style={styles.container}></ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1B1B',
    padding: '5%',
  },
});

export default Profile;
