/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-underscore-dangle */
import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import firestore from '@react-native-firebase/firestore';
import {
  GET_PROJECTS,
  GET_TASKS,
  USER_SIGNIN,
  USER_SIGNOUT,
} from '../../types';
import FireBaseReducer from './firebaseReducer';
import FireBaseContext from './firebaseContext';

const FirebaseState = (props) => {
  const initialState = {
    projects: [],
    user: {},
    tasks: [],
    loggedin: false,
  };
  const [state, dispatch] = useReducer(FireBaseReducer, initialState);

  const getCollection = async (name) => {
    const fetchedCollection = await firestore()
      .collection(name)
      .get()
      .then((collection) => collection._docs);
    return fetchedCollection;
  };

  // CRUD
  const getProjects = async () => {
    const payload = await getCollection('projects');
    dispatch({
      payload,
      type: GET_PROJECTS,
    });
  };

  const getTasks = async () => {
    const payload = await getCollection('tasks');
    dispatch({
      payload,
      type: GET_TASKS,
    });
  };

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

  return (
    <FireBaseContext.Provider
      value={{
        projects: state.projects,
        tasks: state.tasks,
        loggedin: state.loggedin,
        getProjects,
        getTasks,
        signIn,
        signOut,
      }}
    >
      {props.children}
    </FireBaseContext.Provider>
  );
};

FirebaseState.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default FirebaseState;
