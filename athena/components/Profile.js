import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
  },
});

const Profile = () => <ScrollView style={styles.container}></ScrollView>;

export default Profile;
