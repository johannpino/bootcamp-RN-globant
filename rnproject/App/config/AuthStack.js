import React, { useEffect, useState } from 'react';
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
  let routeName;
  let [variable, setVariable] = useState(false);
  const routerPath = () => {
    if (variable) {
      console.log("LOGIN");
      return "Login"
    } else {
      console.log("OnBoarding");
      return "OnBoarding"
    }
  }

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      console.log(value);
      if (value == null) {
        setVariable(false);
        routeName = "OnBoarding";
        console.log("IF", value)
        AsyncStorage.setItem('alreadyLaunched', "true");
      } else {
        routeName = "Login";
        console.log("ELSE", value);
        setVariable(true);
      }
    }).catch(error => console.log("ERROR", error));
  }, []);

  return (
    <MainStack.Navigator initialRouteName={routerPath()}>
      <MainStack.Screen name="Onboarding" component={OnboardingScreen} options={{ header: () => null }} />
      <MainStack.Screen name="Login" component={LoginScreen} options={{ header: () => null }} />
      <MainStack.Screen name="Signup" component={SignupScreen} options={{ header: () => null }} />
      <MainStack.Screen name="MyAppInfo" component={Home} />
      <MainStack.Screen name="Comunas" component={Comunas} />
    </MainStack.Navigator>
  );


};

export default MainStackScreen;