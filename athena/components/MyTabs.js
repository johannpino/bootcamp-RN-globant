import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, Appearance, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './Home';
import Projects from './Projects';
import Profile from './Profile';
import Settings from './Settings';
import AuthContext from '../context/auth/authContext';
import Auth from './Auth';
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  if (!user) return <Auth />;

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (Appearance.getColorScheme() === 'dark') {
            color = 'white';
          }
          color = 'black';
          size = 30;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Projects') {
            iconName = focused ? 'folder-open' : 'folder-open-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Projects" component={Projects} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default MyTabs;
