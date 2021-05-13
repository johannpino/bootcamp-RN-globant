import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Home from '../screens/Home';
import Viajes from '../screens/Viajes';
import Busqueda from '../screens/Busqueda';
import C19 from '../screens/C19';
import Comisaria from '../screens/Comisaria';
import FAQ from '../screens/FAQ';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => (
  <Drawer.Navigator
    drawerType="slide"
    edgeWidth={100}
    hideStatusBar={false}
    overlayColor="#00000090"
    drawerStyle={{
      backgroundColor: '#e6e6e6',
      width: 235,
    }}
    screenOptions={{
      headerShown: true,
      headerTitleAlign: 'center',
    }}
  >
    <Drawer.Screen
      name="Inicio"
      component={Home}
      options={{
        drawerIcon: ({focused}) => (
          <Icon name="home" size={focused ? 25 : 20} />
        ),
        headerShown: true,
      }}
    />
    <Drawer.Screen
      name="Buscador"
      component={Busqueda}
      options={{
        title: 'Buscador',
        drawerIcon: ({focused}) => (
          <Icon name="search" size={focused ? 25 : 20} />
        ),
      }}
    />
    <Drawer.Screen
      name="Viajes"
      component={Viajes}
      options={{
        title: '¿Quieres Viajar?',
        drawerIcon: ({focused}) => (
          <Icon name="route" size={focused ? 25 : 20} />
        ),
      }}
    />

    <Drawer.Screen
      name="C19"
      component={C19}
      options={{
        title: 'C19: Pasaporte Sanitario',
        drawerIcon: ({focused}) => (
          <Icon name="passport" size={focused ? 25 : 20} />
        ),
      }}
    />
    <Drawer.Screen
      name="Comisaria"
      component={Comisaria}
      options={{
        title: 'Comisaria Virtual',
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

export default () => <DrawerNavigation />;
