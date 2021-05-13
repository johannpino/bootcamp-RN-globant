/* eslint-disable no-param-reassign */
import React, { useContext, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './Home';
import ProfileStack from './ProfileStack';
import ProjectsStack from './ProjectsStack';
import ChatStack from './ChatStack';
import FireBaseContext from '../context/firebase/firebaseContext';
import Auth from './Auth';
import NavbarContext from '../context/navbar/navbarContext';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  const firebaseContext = useContext(FireBaseContext);
  const { user } = firebaseContext;

  const navbarContext = useContext(NavbarContext);
  const { navbarHidden } = navbarContext;

  if (!user) return <Auth />;

  return (
    <Tab.Navigator
      lazy={false}
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: '#1B1B1B',
          height: 64,
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          const size = 30;
          let color = '#494949';
          if (route.name === 'Home') {
            iconName = 'home-outline';
            if (focused) {
              color = '#FFFFFF';
              iconName = 'home';
            }
          } else if (route.name === 'Projects') {
            iconName = 'folder-open-outline';
            if (focused) {
              color = '#FFFFFF';
              iconName = 'folder-open';
            }
          } else if (route.name === 'Profile') {
            iconName = 'person-outline';
            if (focused) {
              color = '#FFFFFF';
              iconName = 'person';
            }
          } else if (route.name === 'Chats') {
            iconName = 'chatbubbles-outline';
            if (focused) {
              color = '#FFFFFF';
              iconName = 'chatbubbles';
            }
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Projects" component={ProjectsStack} />
      <Tab.Screen
        name="Chats"
        component={ChatStack}
        options={{ tabBarVisible: !navbarHidden }}
      />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default MyTabs;
