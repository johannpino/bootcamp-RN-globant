import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import MyTabs from './components/MyTabs';
import FirebaseState from './context/firebase/firebaseState';
import ProjectState from './context/projects/projectState';
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
      <ProjectState>
        <NavigationContainer theme={MyTheme}>
          <MyTabs />
        </NavigationContainer>
      </ProjectState>
    </FirebaseState>
  </AuthState>
);

export default App;
