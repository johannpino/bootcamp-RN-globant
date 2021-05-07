import React, { useContext } from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';
import ProfilePicture from './ProfilePicture';
import FireBaseContext from '../context/firebase/firebaseContext';

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
});

const Profile = () => {
  const firebaseContext = useContext(FireBaseContext);
  const { user } = firebaseContext;

  return (
    <View style={styles.container}>
      <ProfilePicture user={user} />
      <Text style={styles.name}>{user.displayName}</Text>
      <Pressable style={styles.editBtn}>
        <Text style={styles.editText}>EDITAR PERFIL</Text>
      </Pressable>
    </View>
  );
};

export default Profile;
