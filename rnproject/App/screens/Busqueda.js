import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {UserInput} from '../components/UserInput';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
    justifyContent: 'center',
  },
});

export default () => {
  return (
    <View style={styles.container}>
      <Text> SCREEN PARA SEARCH </Text>
      <UserInput placeholder="Ingresa la comuna" />
    </View>
  );
};
