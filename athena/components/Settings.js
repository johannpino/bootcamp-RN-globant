import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

const Settings = () => {
  return <ScrollView style={styles.container}></ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
  },
});

export default Settings;
