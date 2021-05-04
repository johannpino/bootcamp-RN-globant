
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, View } from 'react-native';
import MyTabs from './components/MyTabs'

const App = () => {
  
  return (
    <NavigationContainer>
        <MyTabs/>
    </NavigationContainer>
  );
};

export default App;
