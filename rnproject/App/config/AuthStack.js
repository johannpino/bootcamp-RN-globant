import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnboardingScreen from '../screens/OnBoardingScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Home from '../screens/Home';
import Viajes from '../screens/Viajes';
import Busqueda from '../screens/Busqueda';
import C19 from '../screens/C19';
import Comisaria from '../screens/Comisaria';
import FAQ from '../screens/FAQ';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const MainStack = createStackNavigator();

const MainStackScreen = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
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
  }
  if (isFirstLaunch === true) {
    routeName = 'Onboarding';
  } else {
    routeName = 'Login';
  }

  return (
    <MainStack.Navigator initialRouteName={routeName}>
      <MainStack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{header: () => null}}
      />
      <MainStack.Screen
        name="Login"
        component={LoginScreen}
        options={{header: () => null}}
      />
      <MainStack.Screen
        name="Signup"
        component={SignupScreen}
        options={{header: () => null}}
      />
    </MainStack.Navigator>
  );
};

export default MainStackScreen;
