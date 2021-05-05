import React, { useContext } from 'react';
import AuthContext from '../context/auth/authContext';
import Register from '../components/Register'
import Login from '../components/Login'
import { createStackNavigator } from '@react-navigation/stack'

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

const Auth = () => {

  const context = useContext(AuthContext);
  const { initializing} = context;

  if (initializing) return null;

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

};

const styles = StyleSheet.create({});

export default Auth;
