import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import Viajes from '../screens/Viajes';
import Busqueda from '../screens/Busqueda';
import C19 from '../screens/C19';
import Comisaria from '../screens/Comisaria';
import FAQ from '../screens/FAQ';

const MainStack = createStackNavigator();
const MainStackScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen
      name="Home test"
      component={Home}
      options={({headerTitleAlign: 'center'}, {headerShown: true})}
    />
    <MainStack.Screen
      name="Viajes"
      component={Viajes}
      options={{headerTitleAlign: 'center'}}
    />
    <MainStack.Screen
      name="Busqueda"
      component={Busqueda}
      options={{headerTitleAlign: 'center'}}
    />
    <MainStack.Screen
      name="C19"
      component={C19}
      options={{headerTitleAlign: 'center'}}
    />
    <MainStack.Screen
      name="Comisaria"
      component={Comisaria}
      options={{headerTitleAlign: 'center'}}
    />
    <MainStack.Screen
      name="FAQ"
      component={FAQ}
      options={{headerTitleAlign: 'center'}}
    />
  </MainStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <MainStackScreen />
  </NavigationContainer>
);
