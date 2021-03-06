import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FireBaseContext from '../../context/firebase/firebaseContext';
import { updateDocument } from '../../utils/firebase';

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

const AddCollaborator = ({ navigation, route }) => {
  const firebaseContext = useContext(FireBaseContext);
  const { user, addMessage } = firebaseContext;
  const { key, owners } = route.params.item;
  const [error, setError] = useState(false);
  const [collabEmail, setCollabEmail] = useState('');

  const handlePress = () => {
    if (collabEmail.trim() === '') {
      setError(true);
      return;
    }
    updateDocument('projects', key, {
      owners: [...owners, collabEmail.trim().toLocaleLowerCase()],
      lastUpdated: Date.now(),
    });
    addMessage({
      name: user.displayName,
      photoURL: user.photoURL,
      projectId: key,
      text: `agregó a ${collabEmail}`,
      date: Date.now(),
      isMessage: false,
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
        <Text style={styles.title}>{`Añadir${'\n'}colaborador`}</Text>
        <View style={styles.inputView}>
          <TextInput
            onChangeText={(text) => setCollabEmail(text)}
            style={styles.input}
            placeholder="Email del colaborador"
            placeholderTextColor="#484848"
          />
        </View>
        {error ? (
          <Text style={styles.error}>Selecciona colaborador</Text>
        ) : null}
        <Pressable style={styles.projectBtn} onPress={() => handlePress()}>
          <Text style={styles.projectBtnText}>AÑADIR COLABORADOR</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

AddCollaborator.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
  route: PropTypes.instanceOf(Object).isRequired,
};
export default AddCollaborator;
