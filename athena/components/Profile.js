import React, { useContext } from 'react';
import { ScrollView, StyleSheet, Button } from 'react-native';
import AuthContext from '../context/auth/authContext';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
  },
});

const Profile = () => {
  const authContext = useContext(AuthContext);
  const { logout } = authContext;
  return (
    <ScrollView style={styles.container}>
      <Button title="logout" onPress={() => logout()} />
    </ScrollView>
  );
};

export default Profile;
