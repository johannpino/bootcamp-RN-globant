import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import colors from '../constants/colors';
import { UserInput } from '../components/UserInput';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
  },
});

export default () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
      <UserInput
        text="desde"
        value="Ingresa tu comuna de partida"
        onButtonPress={() => alert('Keyboard Input')}
      />
      <UserInput
        text="hacia"
        value="Ingresa la comuna donde deseas ir"
        onButtonPress={() => alert('Keyboard Input')}
      />
    </View>
  );
};
