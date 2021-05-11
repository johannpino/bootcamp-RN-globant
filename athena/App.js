import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { navigationRef } from './utils/RootNavigation';
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
  <FirebaseState>
    <AuthState>
      <NavigationContainer theme={MyTheme} ref={navigationRef}>
        <MyTabs />
      </NavigationContainer>
    </AuthState>
  </FirebaseState>
);

export default App;
