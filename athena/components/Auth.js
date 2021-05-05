import React, { useContext } from 'react';
import AuthContext from '../context/auth/authContext';
import Register from '../components/Register';
import Login from '../components/Login';
import { createStackNavigator } from '@react-navigation/stack';
import Text from 'react-native';

import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View } from 'react-native';

const Stack = createStackNavigator();

const Auth = () => {
  const context = useContext(AuthContext);
  const { initializing } = context;

  if (initializing) return null;

  return (
    <Stack.Navigator headerMode={'none'} tabBar>
      <Stack.Screen name="LoginScreen" component={Login} />
      <Stack.Screen name="RegisterScreen" component={Register} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default Auth;
