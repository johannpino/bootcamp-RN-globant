/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable max-len */
import React, { useContext } from 'react';
import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { rgba } from 'polished';
import PropTypes from 'prop-types';
import FireBaseContext from '../context/firebase/firebaseContext';
import { getCurrentProject, projectHasTasks } from '../utils/helpers';
import DisplayProjectTasks from './DisplayProjectTasks';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
  },
  title: {
    textAlign: 'center',
    marginTop: 24,
    marginBottom: 24,
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
  },
  taskSelectorView: {
    width: '100%',
    flexDirection: 'row',
  },
  taskSelectorText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
    opacity: 0.25,
  },
  taskSelectorActivated: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
    opacity: 1,
  },
  taskSelectorPressable: {
    flex: 1,
  },
  DisplayProjectTasksView: {
    backgroundColor: '#D4D4D4',
    borderRadius: 8,
    marginTop: 8,
  },
  task: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  taskText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1B1B1B',
    width: '85%',
  },
  taskSelectorTitle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 22,
    opacity: 1,
    marginBottom: 8,
  },
  navigationView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    color: '#969696',
    marginHorizontal: 5,
  },
  warning: {
    marginTop: '30%',
    alignItems: 'center',
  },
  warningText: {
    paddingVertical: 10,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  warningTextSubtitle: {
    paddingVertical: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'normal',
    color: '#969696',
  },
  right: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

const ProjectScreen = ({ route, navigation }) => {
  const firebaseContext = useContext(FireBaseContext);
  const { isProject } = route.params;
  const { projects, tasks } = firebaseContext;
  let key;
  if (isProject) {
    key = route.params.key;
  } else {
    key = route.params.projectId;
  }
  const { name, color } = getCurrentProject(projects, key)[0];

  return (
    <ScrollView>
      <LinearGradient style={styles.container} colors={[color, rgba(color, 0)]}>
        <View style={styles.navigationView}>
          <Pressable onPress={() => navigation.navigate('Projects')}>
            <Icon name="arrow-back-outline" size={44} color="#FFFFFF" />
          </Pressable>
          <View style={styles.right}>
            <Pressable
              onPress={() =>
                navigation.navigate('AddCollaborator', { item: route.params })
              }
              style={styles.icon}
            >
              <Icon name="people-circle-outline" size={44} color="#FFFFFF" />
            </Pressable>
            <Pressable
              onPress={() =>
                navigation.navigate('NewTask', { item: route.params })
              }
            >
              <Icon name="add-circle-outline" size={44} color="#FFFFFF" />
            </Pressable>
          </View>
        </View>
        <Text style={styles.title}>{name}</Text>
        <DisplayProjectTasks color={color} projectId={key} />
        {projectHasTasks(tasks, key) ? null : (
          <View style={styles.warning}>
            <Icon name="sad" size={140} color="white" style={styles.icon} />
            <Text style={styles.warningText}>No hay nada por aquí</Text>
            <Text style={styles.warningTextSubtitle}>
              Usa el botón de agregar para crear una tarea
            </Text>
          </View>
        )}
      </LinearGradient>
    </ScrollView>
  );
};

ProjectScreen.propTypes = {
  route: PropTypes.instanceOf(Object).isRequired,
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectScreen;
