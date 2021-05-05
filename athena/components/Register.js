import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import AuthContext from '../context/auth/authContext';

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
  label: {
    fontSize: 24,
    color: 'white',
    marginTop: 4,
    marginBottom: 4,
  },
  inputView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    marginTop: 8,
    marginBottom: 8,
  },
  icon: {
    paddingLeft: 12,
    paddingRight: 12,
  },
  input: {
    fontSize: 20,
    width: '85%',
    color: 'white',
  },
  buttonView: {
    marginTop: 24,
    marginBottom: 16,
  },
  pressableText: {
    color: '#D4D4D4',
    fontSize: 18,
    textDecorationLine: 'underline',
  },
  pressableButton: {
    backgroundColor: '#5014FC',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  pressableButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const context = useContext(AuthContext);
  const { register } = context;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Registrate</Text>

      <View style={styles.inputView}>
        <Icon name="person" size={24} color="white" style={styles.icon} />
        <TextInput
          onChangeText={(text) => setName(text)}
          style={styles.input}
          placeholder="Ingresa tu nombre..."
          placeholderTextColor="#484848"
        />
      </View>
      <View style={styles.inputView}>
        <Icon name="mail" size={24} color="white" style={styles.icon} />
        <TextInput
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          placeholder="Ingresa tu correo electronico..."
          placeholderTextColor="#484848"
        />
      </View>
      <View style={styles.inputView}>
        <Icon name="lock-closed" size={24} color="white" style={styles.icon} />
        <TextInput
          onChangeText={(text) => setPass(text)}
          style={styles.input}
          placeholder="Ingresa tu contraseña..."
          placeholderTextColor="#484848"
        />
      </View>
      <View style={styles.buttonView}>
        <Pressable
          onPress={() => register(name, email.toLocaleLowerCase(), pass)}
          style={styles.pressableButton}
        >
          <Text style={styles.pressableButtonText}>REGISTRARME</Text>
        </Pressable>
      </View>
      <Pressable onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.pressableText}>
          ¿Ya tienes una cuenta?
          {'\n'}
          Inicia sesión
        </Text>
      </Pressable>
    </ScrollView>
  );
};

export default Register;