import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { navigationRef } from './utils/RootNavigation';
import MyTabs from './components/MyTabs';
import FirebaseState from './context/firebase/firebaseState';
import AuthState from './context/auth/authState';
import NavbarState from './context/navbar/navbarState';

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
      <NavbarState>
        <NavigationContainer theme={MyTheme} ref={navigationRef}>
          <MyTabs />
        </NavigationContainer>
      </NavbarState>
    </AuthState>
  </FirebaseState>
);

export default App;
