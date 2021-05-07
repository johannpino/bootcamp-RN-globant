/* eslint-disable implicit-arrow-linebreak */
import React, { useEffect, useContext } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FireBaseContext from '../context/firebase/firebaseContext';
import ProjectsContext from '../context/projects/projectsContext';
import DisplayProjects from './DisplayProjects';
import NewProject from './NewProject';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
  },
  titleContainer: {
    flexDirection: 'row',
  },
  title: {
    marginTop: 24,
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
  },
  icon: {
    marginTop: 30,
    marginBottom: 24,
    marginLeft: 90,
  },
  iconSearch: {
    marginVertical: 8,
    marginLeft: 14,
    marginRight: 5,
  },
  search: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 6,
    marginTop: 8,
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    width: '100%',
  },
  input: {
    fontSize: 20,
    width: '85%',
    color: 'black',
  },
});

const Projects = () => {
  const firebaseContext = useContext(FireBaseContext);
  const { projects, getProjects, user } = firebaseContext;

  const projectsContext = useContext(ProjectsContext);
  const {
    filteredProjects,
    newProject,
    setNewProject,
    setFilteredProjects,
  } = projectsContext;

  useEffect(() => {
    if (Object.keys(user).length > 0) {
      getProjects();
      setFilteredProjects(projects);
    }
  }, [user, projects]);

  const handlePress = () => {
    setNewProject(true);
  };

  const handleChange = (text) => {
    const result = projects.filter((project) => {
      // eslint-disable-next-line no-underscore-dangle
      const { name } = project._data;
      return name.toLowerCase().includes(text.toLowerCase());
    });
    setFilteredProjects(result);
  };

  if (newProject) return <NewProject />;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Proyectos</Text>
        <Pressable onPress={() => handlePress()}>
          <Icon
            style={styles.icon}
            name="add-circle-outline"
            size={52}
            color="#FFFFFF"
          />
        </Pressable>
      </View>
      <View style={styles.search}>
        <Icon
          style={styles.iconSearch}
          name="search-outline"
          size={35}
          color="#000000"
        />
        <TextInput
          onChangeText={(text) => handleChange(text)}
          style={styles.input}
          placeholder="Busca un proyecto..."
          placeholderTextColor="#484848"
        />
      </View>
      <DisplayProjects title="Tus proyectos" items={filteredProjects} />
    </ScrollView>
  );
};

export default Projects;
