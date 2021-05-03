import React from 'react';
import {
  TouchableOpacity,
  TextInput,
  View,
  StyleSheet,
  Text,
} from 'react-native';

const styles = StyleSheet.create({});

export const UserInput = ({text, value, onButtonPress}) => {
  return (
    <View>
      <TouchableOpacity onPress={onButtonPress}>
        <Text>{text}</Text>
      </TouchableOpacity>
      <TextInput />
    </View>
  );
};
