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
import ProjectsContext from '../context/projects/projectsContext';
import FireBaseContext from '../context/firebase/firebaseContext';
import ColorContainer from './ColorContainer';
import colors from '../utils/colors';
import { capitalizeFirstLetter } from '../utils/helpers';

const styles = StyleSheet.create({
  container: {
    height: 1,
    padding: '5%',
  },
  modalContainer: {
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    marginTop: 24,
    marginBottom: 24,
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    fontSize: 20,
    color: 'white',
  },
  inputView: {
    alignItems: 'center',
    marginHorizontal: 48,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    width: '80%',
  },
  projectBtn: {
    backgroundColor: '#5014FC',
    borderRadius: 6,
    padding: 12,
  },
  projectBtnText: {
    color: 'white',
    fontSize: 18,
  },
});

const NewProject = () => {
  const projectsContext = useContext(ProjectsContext);
  const firebaseContext = useContext(FireBaseContext);
  const [selectedColor, setSelectedcolor] = useState(1);

  const { addProject, user } = firebaseContext;
  const { setNewProject } = projectsContext;
  const [name, setName] = useState('');

  const selectedHandler = (color) => {
    setSelectedcolor(color);
  };

  useEffect(() => {}, [selectedColor]);

  return (
    <ScrollView style={styles.container}>
      <Pressable onPress={() => setNewProject(false)}>
        <Icon
          style={styles.icon}
          name="close-outline"
          size={52}
          color="#FFFFFF"
        />
      </Pressable>
      <View style={styles.modalContainer}>
        <Text style={styles.title}>{`Nuevo${'\n'}proyecto`}</Text>
        <View style={styles.inputView}>
          <TextInput
            onChangeText={(text) => setName(text)}
            style={styles.input}
            placeholder="Nombre del proyecto"
            placeholderTextColor="#484848"
          />
        </View>
        <ColorContainer
          colors={colors}
          selectedHandler={selectedHandler}
          selectedColor={selectedColor}
        />
        <Pressable
          style={styles.projectBtn}
          onPress={() => {
            addProject({
              color: selectedColor,
              name: capitalizeFirstLetter(name),
              owner: user.email,
              tasksRemaining: 0,
            });
            setNewProject(false);
          }}
        >
          <Text style={styles.projectBtnText}>CREAR PROYECTO</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default NewProject;
