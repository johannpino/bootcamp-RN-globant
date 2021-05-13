import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './Profile';
import EditProfile from './EditProfile';
import Chats from './Chats';
import Chat from './Chat.js';

const Stack = createStackNavigator();

const ChatStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Chats"
      component={Chats}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Chat"
      component={Chat}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default ChatStack;
