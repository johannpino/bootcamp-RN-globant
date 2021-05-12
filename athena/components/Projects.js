/* eslint-disable max-len */
/* eslint-disable implicit-arrow-linebreak */
import React, { useContext, useState, useEffect } from 'react';

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
import DisplayProjects from './DisplayProjects';
import {
  filterProjects,
  getUserProyects,
  userHasProjects,
  userHasTasks,
} from '../utils/helpers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
  },
  titleContainer: {
    flexDirection: 'row',
  },
  title: {
    marginBottom: 8,
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
  },
  notFound: {
    marginTop: 24,
    fontSize: 24,
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
  navigationView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    color: '#969696',
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
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'normal',
    color: '#969696',
  },
});

const Projects = ({ navigation }) => {
  const firebaseContext = useContext(FireBaseContext);
  const { projects, user, tasks } = firebaseContext;

  const [filteredProjects, setFilteredProjects] = useState([]);
  const [search, setSearch] = useState('');

  const showProyectsNoFilter = () => {
    if (search.trim() === '') {
      return (
        <DisplayProjects
          title=""
          items={getUserProyects(projects, user.email)}
        />
      );
    }
    return <Text style={styles.notFound}>No se encontraron resultados</Text>;
  };

  const handleChange = (text) => {
    setSearch(text);
    setFilteredProjects(
      filterProjects(getUserProyects(projects, user.email), text)
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.navigationView}>
        <Text style={styles.title}>Proyectos</Text>
        <Pressable onPress={() => navigation.navigate('NewProject')}>
          <Icon name="add-circle-outline" size={44} color="#FFFFFF" />
        </Pressable>
      </View>
      {userHasProjects(projects, user.email) ? (
        <View>
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
        </View>
      ) : (
        <View style={styles.warning}>
          <Icon name="sad" size={140} color="white" style={styles.icon} />
          <Text style={styles.warningText}>No hay nada por aquí</Text>
          <Text style={styles.warningTextSubtitle}>
            Usa el botón de agregar para crear un proyecto
          </Text>
        </View>
      )}
      {filteredProjects.length > 0 ? (
        <DisplayProjects title="" items={filteredProjects} />
      ) : (
        showProyectsNoFilter()
      )}
      {userHasTasks(tasks, user.email) ? null : (
        <View style={styles.warning}>
          <Icon name="newspaper" size={140} color="white" style={styles.icon} />
          <Text style={styles.warningText}>No tienes tareas</Text>
          <Text style={styles.warningTextSubtitle}>
            Has click en un proyecto
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

export default Projects;
