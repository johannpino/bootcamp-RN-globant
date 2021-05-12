/* eslint-disable no-param-reassign */
import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './Home';
import ProfileStack from './ProfileStack';
import ProjectsStack from './ProjectsStack';
import Settings from './Settings';
import FireBaseContext from '../context/firebase/firebaseContext';
import Auth from './Auth';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  const firebaseContext = useContext(FireBaseContext);
  const { user } = firebaseContext;
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
          } else if (route.name === 'Settings') {
            iconName = 'settings-outline';
            if (focused) {
              color = '#FFFFFF';
              iconName = 'settings';
            }
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Projects" component={ProjectsStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default MyTabs;
