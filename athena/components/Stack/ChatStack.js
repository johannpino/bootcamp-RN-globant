import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Chats from '../Chat/Chats';
import Chat from '../Chat/Chat';

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
