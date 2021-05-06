/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useContext } from 'react';
import auth from '@react-native-firebase/auth';
import PropTypes from 'prop-types';
import AuthContext from './authContext';
import FireBaseContext from '../firebase/firebaseContext';

const AuthState = (props) => {
  // Set an initializing state whilst Firebase connects
  const firebaseContext = useContext(FireBaseContext);
  const { setUser, setInitializing, initializing } = firebaseContext;

  // eslint-disable-next-line no-shadow
  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  const login = (email, pass) => {
    auth()
      .signInWithEmailAndPassword(email, pass)
      .catch((error) => {
        console.log(error);
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
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

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
        onAuthStateChanged,
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
