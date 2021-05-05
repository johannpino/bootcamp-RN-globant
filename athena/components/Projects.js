import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
  },
});

const Projects = () => <ScrollView style={styles.container} />;

export default Projects;
