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
import PropTypes from 'prop-types';
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

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const context = useContext(AuthContext);
  const { login } = context;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>
      <View style={styles.inputView}>
        <Icon name="mail" size={24} color="white" style={styles.icon} />
        <TextInput
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          placeholder="Ingresa tu correo electronico"
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
          onPress={() => login(email, pass)}
          style={styles.pressableButton}
        >
          <Text style={styles.pressableButtonText}>INICIAR SESION</Text>
        </Pressable>
      </View>
      <Pressable onPress={() => navigation.navigate('RegisterScreen')}>
        <Text style={styles.pressableText}>
          ¿No tienes una cuenta?
          {'\n'}
          Registrate
        </Text>
      </Pressable>
    </ScrollView>
  );
};

Login.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default Login;
