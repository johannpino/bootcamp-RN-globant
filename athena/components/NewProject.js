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
import ColorContainer from './ColorContainer';
import colors from '../utils/colors';
import ProfilePicture from './ProfilePicture';
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
  error: {
    color: '#FF0000',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

const NewProject = ({ navigation }) => {
  const firebaseContext = useContext(FireBaseContext);
  const [selectedColor, setSelectedcolor] = useState('');

  const { addProject, user } = firebaseContext;
  const [error, setError] = useState(false);
  const [name, setName] = useState('');

  const selectedHandler = (color) => {
    setSelectedcolor(color);
  };

  const handlePress = () => {
    if (name.trim() === '' || selectedColor === '') {
      setError(true);
      return;
    }
    addProject({
      color: selectedColor,
      name: capitalizeFirstLetter(name),
      owner: user.email,
      tasksRemaining: 0,
    });
    setError(false);
    navigation.navigate('Projects');
  };

  useEffect(() => {}, [selectedColor]);

  return (
    <ScrollView style={styles.container}>
      <Pressable onPress={() => navigation.navigate('Projects')}>
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
        {error ? (
          <Text style={styles.error}>Selecciona nombre y color</Text>
        ) : null}
        <Pressable style={styles.projectBtn} onPress={() => handlePress()}>
          <Text style={styles.projectBtnText}>CREAR PROYECTO</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default NewProject;
