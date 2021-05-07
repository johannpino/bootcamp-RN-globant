import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './Profile';
import EditProfile from './EditProfile';

const Stack = createStackNavigator();

const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={{
        headerStyle: {
          backgroundColor: '#1B1B1B',
        },
      }}
    />
    <Stack.Screen
      name="EditProfile"
      component={EditProfile}
      options={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#1B1B1B',
        },
      }}
    />
  </Stack.Navigator>
);

export default ProfileStack;
