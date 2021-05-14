import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FireBaseContext from '../../context/firebase/firebaseContext';
import Register from './Register';
import Login from './Login';

const Stack = createStackNavigator();

const Auth = () => {
  const context = useContext(FireBaseContext);
  const { initializing } = context;

  if (initializing) return null;

  return (
    <Stack.Navigator headerMode="none" tabBar>
      <Stack.Screen name="LoginScreen" component={Login} />
      <Stack.Screen name="RegisterScreen" component={Register} />
    </Stack.Navigator>
  );
};

export default Auth;
