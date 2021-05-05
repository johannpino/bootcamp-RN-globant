import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
  },
});

const Settings = () => <ScrollView style={styles.container} />;

export default Settings;
