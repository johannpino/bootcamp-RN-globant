/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-param-reassign */
import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './Home';
import ProfileStack from './Stack/ProfileStack';
import ProjectsStack from './Stack/ProjectsStack';
import ChatStack from './Stack/ChatStack';
import FireBaseContext from '../context/firebase/firebaseContext';
import Auth from './Auth/Auth';
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

MyTabs.propTypes = {
  focused: PropTypes.bool,
};

export default MyTabs;
