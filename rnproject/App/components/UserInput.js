import React from 'react';
import {Pressable, TextInput, View, StyleSheet, Text} from 'react-native';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 5,
    flexDirection: 'row',
  },
  button: {
    padding: 15,
    borderRightColor: colors.black,
    borderRightWidth: 1,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.black,
  },
  input: {
    flex: 1,
    padding: 12,
    color: colors.black,
  },
});

export const UserInput = ({text, placeholder, onButtonPress, onChangeText}) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onButtonPress}
        onChangeText={onChangeText}
        style={styles.button}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </Pressable>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onPress={onButtonPress}
      />
    </View>
  );
};
