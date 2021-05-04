import React, { useState, useEffect, useReducer } from 'react';
import { GET_PROJECTS } from '../../types';
import FireBaseReducer from './firebaseReducer';
import FireBaseContext from './firebaseContext';
import firestore from '@react-native-firebase/firestore';

const FirebaseState = (props) => {
  const initialState = {
    projects: [],
    user: {},
    tasks: [],
  };
  const [state, dispatch] = useReducer(FireBaseReducer, initialState);
  const [projects, setProjects] = useState([]);

  // CRUD
  const getProjects = async () => {
    const fetchedProjects = await firestore()
      .collection('projects')
      .get()
      .then((projects) => {
        dispatch({
          type: GET_PROJECTS,
          payload: projects._docs,
        });
      });
  };

  return (
    <FireBaseContext.Provider value={{ projects: state.projects, getProjects }}>
      {props.children}
    </FireBaseContext.Provider>
  );
};

export default FirebaseState;
