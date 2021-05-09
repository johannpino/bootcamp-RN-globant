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
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="EditProfile"
      component={EditProfile}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default ProfileStack;
