/* eslint-disable implicit-arrow-linebreak */
import React, { useContext, useState } from 'react';
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
import { updateDocument } from '../utils/firebase';
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
    marginTop: 20,
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

const NewTask = ({ navigation, route }) => {
  const firebaseContext = useContext(FireBaseContext);
  const { key, tasksRemaining, color, name } = route.params.item;
  const { addTask, user } = firebaseContext;
  const [error, setError] = useState(false);
  const [taskName, setTaskName] = useState('');

  const handlePress = () => {
    if (taskName.trim() === '') {
      setError(true);
      return;
    }
    addTask({
      completed: false,
      name: capitalizeFirstLetter(taskName),
      projectId: key,
      projectName: name,
      owner: user.email,
      color,
      date: Date.now(),
    });
    updateDocument('projects', key, {
      tasksRemaining: tasksRemaining + 1,
    });
    setError(false);
    navigation.navigate('ProjectScreen');
  };

  return (
    <ScrollView style={styles.container}>
      <Pressable onPress={() => navigation.navigate('ProjectScreen')}>
        <Icon
          style={styles.icon}
          name="close-outline"
          size={52}
          color="#FFFFFF"
        />
      </Pressable>
      <View style={styles.modalContainer}>
        <Text style={styles.title}>{`Nueva${'\n'}tarea`}</Text>
        <View style={styles.inputView}>
          <TextInput
            onChangeText={(text) => setTaskName(text)}
            style={styles.input}
            placeholder="Nombre de la tarea"
            placeholderTextColor="#484848"
          />
        </View>
        {error ? <Text style={styles.error}>Selecciona nombre</Text> : null}
        <Pressable style={styles.projectBtn} onPress={() => handlePress()}>
          <Text style={styles.projectBtnText}>CREAR TAREA</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default NewTask;
