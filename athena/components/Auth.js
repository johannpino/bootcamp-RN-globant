/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useState, useEffect, useContext } from 'react';
import firestore from '@react-native-firebase/firestore';
import AuthContext from '../context/auth/authContext';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Button,
  useColorScheme,
  View,
} from 'react-native';

const Auth = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const context = useContext(AuthContext);
  const { user, initializing, login, logout, register } = context;

  if (initializing) return null;

  if (!user) {
    return (
      <SafeAreaView>
        <StatusBar />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            <Text>Sign up</Text>
            <View>
              <Text>Name:</Text>
              <TextInput onChangeText={(text) => setName(text)}></TextInput>
            </View>
            <View>
              <Text>Email:</Text>
              <TextInput onChangeText={(text) => setEmail(text)}></TextInput>
            </View>
            <View>
              <Text>Password:</Text>
              <TextInput onChangeText={(text) => setPass(text)}></TextInput>
            </View>
            <Button
              title="Sign up"
              onPress={() => register(name, email.toLocaleLowerCase(), pass)} // IMPORTANTE EL TOLOWERCASE
            ></Button>
            <Text></Text>
            <Text>Or</Text>
            <Text></Text>
            <Text>Sign in</Text>
            <View>
              <Text>Email:</Text>
              <TextInput onChangeText={(text) => setEmail(text)}></TextInput>
            </View>
            <View>
              <Text>Password:</Text>
              <TextInput onChangeText={(text) => setPass(text)}></TextInput>
            </View>
            <Button title="Sign in" onPress={() => login(email, pass)}></Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header />
        <View>
          <View>
            <Text>Welcome {name}</Text>
          </View>
          <View>
            <Text>Projects</Text>
          </View>
          <Button title="Sign out" onPress={() => logout()}></Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Auth;
