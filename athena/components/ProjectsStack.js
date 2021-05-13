import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Projects from './Projects';
import NewProject from './NewProject';
import ProjectScreen from './ProjectScreen';
import NewTask from './NewTask';
import AddCollaborator from './AddCollaborator';

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
    <Stack.Screen
      name="NewTask"
      component={NewTask}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="AddCollaborator"
      component={AddCollaborator}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default ProjectsStack;
