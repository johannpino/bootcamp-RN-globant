/* eslint-disable no-underscore-dangle */
/* eslint-disable implicit-arrow-linebreak */
import React, { useEffect, useContext, useState } from 'react';
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
import { filterProjects, getUserProyects } from '../utils/helpers';

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
});

const Projects = ({ navigation }) => {
  const firebaseContext = useContext(FireBaseContext);
  const { projects, setProjects, user } = firebaseContext;

  const [filteredProjects, setFilteredProjects] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (Object.keys(user).length > 0) {
      // setProjects();
    }
  }, [filteredProjects]);

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
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Proyectos</Text>
        <Pressable onPress={() => navigation.navigate('NewProject')}>
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
      {filteredProjects.length > 0 ? (
        <DisplayProjects title="" items={filteredProjects} />
      ) : (
        showProyectsNoFilter()
      )}
    </ScrollView>
  );
};

export default Projects;
