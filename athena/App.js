import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import MyTabs from './components/MyTabs';
import FirebaseState from './context/firebase/firebaseState';
import AuthState from './context/auth/authState';
import ProjectsState from './context/projects/projectsState';

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
      <ProjectsState>
        <NavigationContainer theme={MyTheme}>
          <MyTabs />
        </NavigationContainer>
      </ProjectsState>
    </AuthState>
  </FirebaseState>
);

export default App;
