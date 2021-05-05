/* eslint-disable no-underscore-dangle */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect, useReducer } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { USER_SIGNIN, USER_SIGNOUT } from '../../types';
import authReducer from './authReducer';
import AuthContext from './authContext';

const AuthState = (props) => {
  const initialState = {};
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [userName, setUserName] = useState();
  const [state, dispatch] = useReducer(authReducer, initialState);

  const signIn = () => {
    dispatch({
      type: USER_SIGNIN,
    });
  };

  const signOut = () => {
    dispatch({
      type: USER_SIGNOUT,
    });
  };

  const getUser = async (userEmail) => {
    const foundUser = await firestore()
      .collection('users')
      .where('email', '==', userEmail)
      .get()
      .then((res) => res._docs[0]._data.name);
    setUserName(foundUser);
  };

  // Handle user state changes
  const onAuthStateChanged = (user) => {
    setUser(user);
    if (user) {
      getUser(user.email);
      // getProjects(user.email);
    }
    if (initializing) setInitializing(false);
  };

  const login = (email, pass) => {
    auth().signInWithEmailAndPassword(email, pass);
    signIn();
  };

  const logout = () => {
    console.log('loggin out');
    auth().signOut();
  };

  const register = (name, email, pass) => {
    auth()
      .createUserWithEmailAndPassword(email, pass)
      .then(() => {
        firestore()
          .collection('users')
          .add({
            name,
            email,
          })
          .then(() => {
            console.log('User added!');
          });
        console.log('User account created & signed in!');
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

  //   const getProjects = async (userEmail) => {
  //     const projects = await firestore().
  //      collection('projects').where('owner', '==', userEmail).get();
  //     console.log(projects._docs);
  //   };

  //   const createProject = () => {
  //     firestore()
  //       .collection('projects')
  //       .add({
  //         name: project,
  //         owner: user.email,
  //       })
  //       .then(() => {
  //         console.log('project added!');
  //       });
  //   };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <AuthContext.Provider
      value={{
        loggedin: state.loggedin,
        user,
        initializing,
        userName,
        signIn,
        signOut,
        onAuthStateChanged,
        login,
        logout,
        register,
        getUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
