import React, { useContext } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import MyTabs from './components/MyTabs';
import FirebaseState from './context/firebase/firebaseState';
import ProjectState from './context/projects/projectState';
import AuthState from './context/auth/authState';

const App = () => {
  return (
    <AuthState>
      <FirebaseState>
        <ProjectState>
          <NavigationContainer>
            <MyTabs />
          </NavigationContainer>
        </ProjectState>
      </FirebaseState>
    </AuthState>
  );
};

export default App;
