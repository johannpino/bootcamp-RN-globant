import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AuthContext from '../context/auth/authContext';

const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const context = useContext(AuthContext);
  const { user, initializing, login, logout, register } = context;

  return (
    <View>
      <Text>Sign up</Text>
      <Text>Name:</Text>
      <TextInput onChangeText={(text) => setName(text)}></TextInput>
      <Text>Email:</Text>
      <TextInput onChangeText={(text) => setEmail(text)}></TextInput>
      <Text>Password:</Text>
      <TextInput onChangeText={(text) => setPass(text)}></TextInput>
      <Button
        title="Sign up"
        onPress={() => register(name, email.toLocaleLowerCase(), pass)} // IMPORTANTE EL TOLOWERCASE
      ></Button>
      <Button title="go to login" onPress={() => navigation.navigate('LoginScreen')}></Button>
    </View>
  );
};

export default Register;
