import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Projects from './Projects';
import NewProject from './NewProject';
import ProjectScreen from './ProjectScreen';

const Stack = createStackNavigator();

const ProjectsStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Projects"
      component={Projects}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ProjectScreen"
      component={ProjectScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="NewProject"
      component={NewProject}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default ProjectsStack;
