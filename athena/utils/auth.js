import React, { useState, useReducer } from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const [initializing, setInitializing] = useState(true);
const [user, setUser] = useState();
const [userName, setUserName] = useState();
const [state, dispatch] = useReducer(authReducer, initialState);

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

// eslint-disable-next-line no-shadow
const onAuthStateChanged = (user) => {
  setUser(user);
  if (user) {
    getUser(user.email);
    // getProjects(user.email);
  }
  if (initializing) setInitializing(false);
};

const getUser = async (userEmail) => {
  const foundUser = await firestore()
    .collection('users')
    .where('email', '==', userEmail)
    .get()
    .then((res) => res._docs[0]._data.name);
  setUserName(foundUser);
};

const login = (email, pass) => {
  auth().signInWithEmailAndPassword(email, pass);
  signIn();
};

const logout = () => {
  console.log('loggin out');
  auth().signOut();
};

const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

export { register, getUser, onAuthStateChanged, login, logout, subscriber };
