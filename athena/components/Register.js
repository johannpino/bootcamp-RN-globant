import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Pressable } from 'react-native';
import AuthContext from '../context/auth/authContext';

const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const context = useContext(AuthContext);
  const { user, initializing, login, logout, register } = context;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Register</Text>

      <Text style={styles.label}>Name:</Text>
      <View style={styles.inputView}>
        <TextInput onChangeText={(text) => setName(text)} style={styles.input}></TextInput>
      </View>
      <Text style={styles.label}>Email:</Text>
      <View style={styles.inputView}>
        <TextInput onChangeText={(text) => setEmail(text)} style={styles.input}></TextInput>
      </View>
      <Text style={styles.label}>Password:</Text>
      <View style={styles.inputView}>
        <TextInput onChangeText={(text) => setPass(text)} style={styles.input}></TextInput>
      </View>
      <View style={styles.buttonView}>
      <Button
        title="Sign up"
        onPress={() => register(name, email.toLocaleLowerCase(), pass)} // IMPORTANTE EL TOLOWERCASE
        color={'#5014FC'}
     ></Button>
      </View>
      <Pressable onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.pressableText}>Already have an account? Go to Login</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
  },
  title: {
    marginTop: 24,
    marginBottom: 24,
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
  },
  label: {
    fontSize: 24,
    color: 'white',
    marginTop: 4,
    marginBottom: 4,
  },
  inputView: {
    backgroundColor: 'white',
  },
  input: {
    fontSize: 20,
  },
  buttonView: {
    marginTop: 24,
    marginBottom: 16
  },
  pressableText: {
    color: '#D4D4D4',
    fontSize: 18,
    textDecorationLine: 'underline'
}
});

export default Register;
