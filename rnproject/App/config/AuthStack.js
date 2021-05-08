import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Comunas from '../screens/Comunas';
import OnboardingScreen from '../screens/OnBoardingScreen';
import AsyncStorage from '@react-native-async-storage/async-storage'
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const MainStack = createStackNavigator();

const MainStackScreen = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });


  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch == true) {
    routeName = 'Onboarding';
  } else {
    routeName = 'Login';
  }

  return (
    <MainStack.Navigator initialRouteName={routeName}>
      <MainStack.Screen name="Onboarding" component={OnboardingScreen} options={{ header: () => null }} />
      <MainStack.Screen name="Login" component={LoginScreen} options={{ header: () => null }} />
      <MainStack.Screen name="Signup" component={SignupScreen} options={{ header: () => null }} />
      <MainStack.Screen name="MyAppInfo" component={Home} />
      <MainStack.Screen name="Comunas" component={Comunas} />
    </MainStack.Navigator>
  );


};

export default MainStackScreen;