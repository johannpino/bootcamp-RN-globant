import React, { useContext } from 'react';
import { ScrollView, StyleSheet, Text, Button, Pressable } from 'react-native';
import AuthContext from '../context/auth/authContext';
import GestureRecognizer from 'react-native-swipe-gestures';
import { config } from '../utils/helpers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
  },
  title: {
    marginTop: 24,
    marginBottom: 24,
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
  },
  secondary: {
    fontSize: 22,
    color: 'white',
  },
  logoutBtn: {
    borderWidth: 2,
    borderColor: '#FF2626',
    backgroundColor: 'transparent',
    borderRadius: 6,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutBtnText: {
    fontSize: 18,
    color: '#FF2626',
  },
});

const Settings = ({ navigation }) => {
  const authContext = useContext(AuthContext);
  const { logout } = authContext;
  return (
    <GestureRecognizer
      onSwipeRight={() => navigation.navigate('Profile')}
      config={config}
      style={{
        flex: 1,
      }}
    >
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Configuración</Text>
        <Pressable style={styles.logoutBtn} onPress={() => logout()}>
          <Text style={styles.logoutBtnText}>CERRAR SESIÓN</Text>
        </Pressable>
      </ScrollView>
    </GestureRecognizer>
  );
};

export default Settings;
