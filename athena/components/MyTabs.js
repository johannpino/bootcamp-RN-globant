/* eslint-disable no-param-reassign */
import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
        style: {
          backgroundColor: '#1B1B1B',
          height: 64,
        },
      }}
      screenOptions={({ route }) => ({
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ focused }) => {
          let iconName;
          const size = 30;
          let color = '#494949';
          if (route.name === 'Home') {
            iconName = 'home';
            if (focused) {
              color = '#FFFFFF';
            }
          } else if (route.name === 'Projects') {
            iconName = 'folder-open';
            if (focused) {
              color = '#FFFFFF';
            }
          } else if (route.name === 'Profile') {
            iconName = 'person-circle';
            if (focused) {
              color = '#FFFFFF';
            }
          } else if (route.name === 'Settings') {
            iconName = 'settings';
            if (focused) {
              color = '#FFFFFF';
            }
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
