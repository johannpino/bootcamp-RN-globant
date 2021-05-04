import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import MyTabs from './components/MyTabs';
import FirebaseState from './context/firebase/firebaseState';
import FireBaseContext from './context/firebase/firebaseContext';

const App = () => {
  return (
    <FirebaseState>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </FirebaseState>
  );
};

export default App;
