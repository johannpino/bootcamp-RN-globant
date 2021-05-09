/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import PropTypes from 'prop-types';
import AuthContext from './authContext';
import FireBaseContext from '../firebase/firebaseContext';

const AuthState = (props) => {
  // Set an initializing state whilst Firebase connects
  const firebaseContext = useContext(FireBaseContext);
  const { setUser, setInitializing, initializing } = firebaseContext;
  const [errorMessage, setErrorMessage] = useState('');
  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  // updates user after signup
  const onUserChanged = (user) => {
    setUser(user);
  };

  const login = (email, pass) => {
    auth()
      .signInWithEmailAndPassword(email, pass)
      .then(() => {
        setErrorMessage('');
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/invalid-email':
            setErrorMessage('Introduce un email válido');
            break;
          case 'auth/wrong-password':
            setErrorMessage('Usuario y/o contraseña incorrecta.');
            break;
          case 'auth/user-not-found':
            setErrorMessage('No existe un usuario con ese email.');
            break;
          case 'auth/user-disabled':
            setErrorMessage('Este usuario fue deshabilitado.');
            break;
          case 'too-many-requests':
            setErrorMessage('Usuario bloqueado. Intenta de nuevo más tarde.');
            break;
          default:
            setErrorMessage('Ha ocurrido un error. Inténtalo de nuevo.');
        }
      });
  };

  const logout = () => {
    auth().signOut();
  };

  const register = (name, email, pass) => {
    auth()
      .createUserWithEmailAndPassword(email, pass)
      .then((userData) => {
        userData.user.updateProfile({
          displayName: name,
          photoURL: '',
        });
        setErrorMessage('');
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/email-already-in-use':
            setErrorMessage('El email ingresado ya está en uso.');
            break;
          case 'auth/invalid-email':
            setErrorMessage('El email ingresado es inválido.');
            break;
          case 'auth/weak-password':
            setErrorMessage('Contraseña inválida, mínimo 6 caracteres.');
            break;
          default:
            setErrorMessage('Ha ocurrido un error. Inténtalo de nuevo.');
        }
      });
  };

  useEffect(() => {
    const subscriber = auth().onUserChanged(onUserChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        register,
        setErrorMessage,
        errorMessage,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

AuthState.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default AuthState;
