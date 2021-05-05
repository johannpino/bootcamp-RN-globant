import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Pressable} from 'react-native';
import AuthContext from '../context/auth/authContext';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const context = useContext(AuthContext);
  const { user, initializing, login, logout, register } = context;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Log in</Text>

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
      title="Sign in" 
      onPress={() => login(email, pass)}
        color={'#5014FC'}
      ></Button>    
      </View>
      <Pressable onPress={() => navigation.navigate('RegisterScreen')}>
        <Text style={styles.pressableText}>Dont have an account? Go to Register</Text>
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
      color: 'white',
      fontSize: 18,
      textDecorationLine: 'underline'
  }
});

export default Login;
