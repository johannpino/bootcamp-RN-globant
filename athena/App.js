import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import MyTabs from './components/MyTabs';
import FirebaseState from './context/firebase/firebaseState';
import AuthState from './context/auth/authState';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#1B1B1B',
  },
};

const App = () => (
  <AuthState>
    <FirebaseState>
      <NavigationContainer theme={MyTheme}>
        <MyTabs />
      </NavigationContainer>
    </FirebaseState>
  </AuthState>
);

export default App;
