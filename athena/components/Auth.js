
import React, { useState, useEffect, useContext } from 'react';
import firestore from '@react-native-firebase/firestore';
import AuthContext from '../context/auth/authContext';
import Register from '../components/Register'
import Login from '../components/Login'

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
            <Register/>
            <Login />
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
