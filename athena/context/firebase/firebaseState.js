/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect, useReducer } from 'react';
import { ActivityIndicator } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import PropTypes from 'prop-types';
import { getCollection, addDocument } from '../../utils/firebase';
import {
  SET_PROJECTS,
  SET_TASKS,
  SET_INITIALIZING,
  SET_USER,
} from '../../types';
import FireBaseReducer from './firebaseReducer';
import FireBaseContext from './firebaseContext';

const FirebaseState = (props) => {
  const initialState = {
    projects: [],
    user: {},
    tasks: [],
    initializing: true,
  };
  const [state, dispatch] = useReducer(FireBaseReducer, initialState);

  // CRUD
  const setProjects = async (payload) => {
    // console.log('setProjects');
    // const payload = await getCollection('projects', state.user.email);
    dispatch({
      payload,
      type: SET_PROJECTS,
    });
  };

  const addProject = (project) => {
    addDocument('projects', project);
    // setProjects();
  };

  const addTask = (task) => {
    addDocument('tasks', task);
  };

  const setTasks = async (payload) => {
    dispatch({
      payload,
      type: SET_TASKS,
    });
  };

  const setUser = (user) => {
    dispatch({
      payload: user,
      type: SET_USER,
    });
  };

  const setInitializing = (bool) => {
    dispatch({
      type: SET_INITIALIZING,
      payload: bool,
    });
  };

  // Observer
  useEffect(() => {
    const subscriber = firestore()
      .collection('projects')
      .onSnapshot((querySnapshot) => {
        const projects = [];

        querySnapshot.forEach((documentSnapshot) => {
          projects.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setProjects(projects);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  useEffect(() => {
    const subscriber = firestore()
      .collection('tasks')
      .onSnapshot((querySnapshot) => {
        const tasks = [];

        querySnapshot.forEach((documentSnapshot) => {
          tasks.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setTasks(tasks);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  return (
    <FireBaseContext.Provider
      value={{
        projects: state.projects,
        tasks: state.tasks,
        initializing: state.initializing,
        user: state.user,
        setUser,
        setInitializing,
        addProject,
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
