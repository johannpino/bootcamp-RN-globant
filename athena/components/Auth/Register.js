/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable object-curly-newline */
import React, { useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import { Formik } from 'formik';

import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import AuthContext from '../../context/auth/authContext';
import { capitalizeFirstLetter } from '../../utils/helpers';

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
  error: {
    color: '#FF2626',
    fontSize: 22,
  },
});

const Register = ({ navigation }) => {
  const context = useContext(AuthContext);
  const { register, errorMessage, setErrorMessage } = context;

  const emailIsValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handlePress = (registerObj) => {
    const name = capitalizeFirstLetter(registerObj.name.trim());
    const email = registerObj.email.trim();
    const pass = registerObj.pass.trim();
    const repeatPass = registerObj.repeatPass.trim();

    if (name === '' || email === '' || pass === '' || repeatPass === '') {
      setErrorMessage('Todos los campos son requeridos');
      return;
    }
    if (!emailIsValid(email)) {
      setErrorMessage('Correo electronico invalido');
      return;
    }
    if (!(pass === repeatPass)) {
      setErrorMessage('Las contraseñas no son iguales');
      return;
    }
    register(name, email, pass, repeatPass);
    setErrorMessage('');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Registrate</Text>
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

      <Formik
        initialValues={{
          name: '',
          email: '',
          pass: '',
          repeatPass: '',
        }}
        onSubmit={(values) => handlePress(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <View style={styles.inputView}>
              <Icon name="person" size={24} color="white" style={styles.icon} />
              <TextInput
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                style={styles.input}
                placeholder="Ingresa tu nombre..."
                placeholderTextColor="#484848"
              />
            </View>
            <View style={styles.inputView}>
              <Icon name="mail" size={24} color="white" style={styles.icon} />
              <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                style={styles.input}
                placeholder="Ingresa tu correo electronico..."
                placeholderTextColor="#484848"
              />
            </View>
            <View style={styles.inputView}>
              <Icon
                name="lock-closed"
                size={24}
                color="white"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                onChangeText={handleChange('pass')}
                onBlur={handleBlur('pass')}
                value={values.pass}
                ref={(ref) =>
                  ref && ref.setNativeProps({ style: { fontFamily: 'normal' } })
                }
                placeholder="Ingresa tu contraseña..."
                placeholderTextColor="#484848"
                secureTextEntry
              />
            </View>
            <View style={styles.inputView}>
              <Icon
                name="lock-closed"
                size={24}
                color="white"
                style={styles.icon}
              />
              <TextInput
                onChangeText={handleChange('repeatPass')}
                onBlur={handleBlur('repeatPass')}
                value={values.repeatPass}
                ref={(ref) =>
                  ref && ref.setNativeProps({ style: { fontFamily: 'normal' } })
                }
                style={styles.input}
                placeholder="Repite tu contraseña..."
                placeholderTextColor="#484848"
                secureTextEntry
              />
            </View>
            <View style={styles.buttonView}>
              <Pressable onPress={handleSubmit} style={styles.pressableButton}>
                <Text style={styles.pressableButtonText}>REGISTRARME</Text>
              </Pressable>
            </View>
          </View>
        )}
      </Formik>
      <Pressable
        onPress={() => {
          navigation.navigate('LoginScreen');
          setErrorMessage('');
        }}
      >
        <Text style={styles.pressableText}>
          ¿Ya tienes una cuenta?
          {'\n'}
          Inicia sesión
        </Text>
      </Pressable>
    </ScrollView>
  );
};

Register.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default Register;
