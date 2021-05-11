import React, { useContext } from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';
import ProfilePicture from './ProfilePicture';
import FireBaseContext from '../context/firebase/firebaseContext';
import {
  getCompletedTasks,
  getUserProyects,
  getUserTasks,
} from '../utils/helpers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
    alignItems: 'center',
  },
  name: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFF',
  },
  editBtn: {
    borderWidth: 2,
    borderColor: '#FFF',
    marginVertical: 20,
    backgroundColor: '#010101',
    borderRadius: 6,
    padding: 12,
  },
  editText: {
    color: 'white',
    fontSize: 18,
  },
  row: {
    flexDirection: 'row',
  },
  statistics: {
    justifyContent: 'center',
    marginHorizontal: 25,
  },
  number: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 36,
    fontWeight: 'bold',
  },
  text: {
    opacity: 0.4,
    color: '#FFF',
    fontSize: 12,
    textAlign: 'center',
  },
});

const Profile = ({ navigation }) => {
  const firebaseContext = useContext(FireBaseContext);
  const { user, projects, tasks } = firebaseContext;
  return (
    <View style={styles.container}>
      <ProfilePicture user={user} />
      <Text style={styles.name}>{user.displayName}</Text>
      <Pressable
        style={styles.editBtn}
        onPress={() => navigation.navigate('EditProfile')}
      >
        <Text style={styles.editText}>EDITAR PERFIL</Text>
      </Pressable>
      <View style={styles.row}>
        <View style={styles.statistics}>
          <Text style={styles.number}>
            {getUserProyects(projects, user.email).length}
          </Text>
          <Text style={styles.text}>{` PROYECTOS${'\n'}ACTIVOS`}</Text>
        </View>
        <View style={styles.statistics}>
          <Text style={styles.number}>
            {getUserTasks(tasks, user.email).length}
          </Text>
          <Text style={styles.text}>{` TAREAS${'\n'}TOTALES`}</Text>
        </View>
        <View style={styles.statistics}>
          <Text style={styles.number}>{getCompletedTasks(tasks).length}</Text>
          <Text style={styles.text}>{` TAREAS${'\n'}COMPLETADAS`}</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;
