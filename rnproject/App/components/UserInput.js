import React from 'react';
import {
  TouchableOpacity,
  TextInput,
  View,
  StyleSheet,
  Text,
} from 'react-native';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.red,
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 10,
    flexDirection: 'row',
  },
  button: {
    padding: 15,
    borderRightColor: colors.blue,
    borderRightWidth: 1,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.blue,
  },
  input: {
    flex: 1,
    padding: 12,
    color: colors.lightcolor,
  },
});

export const UserInput = ({text, placeholder, onButtonPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onButtonPress} style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  );
};
