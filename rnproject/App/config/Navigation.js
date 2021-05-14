import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Home from '../screens/Home';
import Viajes from '../screens/Viajes';
import Busqueda from '../screens/Busqueda';
import C19 from '../screens/C19';
import Comisaria from '../screens/Comisaria';
import FAQ from '../screens/FAQ';

const Drawer = createDrawerNavigator();

const Navigation = () => (
  <Drawer.Navigator>
    <Drawer.Screen
      name="Home"
      component={Home}
      options={{
        drawerIcon: ({focused}) => (
          <Icon name="home" size={focused ? 25 : 20} />
        ),
        headerShown: true,
      }}
    />
    <Drawer.Screen
      name="Busqueda"
      component={Busqueda}
      options={{
        title: 'Search',
        drawerIcon: ({focused}) => (
          <Icon name="search" size={focused ? 25 : 20} />
        ),
      }}
    />
    <Drawer.Screen
      name="Viajes"
      component={Viajes}
      options={{
        title: 'Travel Companion',
        drawerIcon: ({focused}) => (
          <Icon name="route" size={focused ? 25 : 20} />
        ),
      }}
    />

    <Drawer.Screen
      name="C19"
      component={C19}
      options={{
        title: 'Pasaporte Sanitario',
        drawerIcon: ({focused}) => (
          <Icon name="passport" size={focused ? 25 : 20} />
        ),
      }}
    />
    <Drawer.Screen
      name="Comisaria"
      component={Comisaria}
      options={{
        title: 'Permisos',
        drawerIcon: ({focused}) => (
          <Icon name="id-card" size={focused ? 25 : 20} />
        ),
      }}
    />
    <Drawer.Screen
      name="FAQ"
      component={FAQ}
      options={{
        title: 'Preguntas Frecuentes',
        drawerIcon: ({focused}) => (
          <Icon name="question" size={focused ? 25 : 20} />
        ),
      }}
    />
  </Drawer.Navigator>
);

export default () => (
  <NavigationContainer>
    <Navigation />
  </NavigationContainer>
);

/* const MainStack = createStackNavigator();
import {createStackNavigator} from '@react-navigation/stack';
const MainStackScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen
      name="Home test"
      component={Home}
      options={({headerTitleAlign: 'center'}, {headerShown: true})}
    />
    <MainStack.Screen
      name="Busqueda"
      component={Busqueda}
      options={{headerTitleAlign: 'center'}}
    />
    <MainStack.Screen
      name="Viajes"
      component={Viajes}
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
*/
