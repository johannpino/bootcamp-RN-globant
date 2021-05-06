/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-underscore-dangle */
import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import getCollection from '../../utils/firebase';
import {
  GET_PROJECTS,
  GET_TASKS,
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
  const getProjects = async () => {
    console.log(state.user.email);
    const payload = await getCollection('projects', state.user.email);
    dispatch({
      payload,
      type: GET_PROJECTS,
    });
  };

  const getTasks = async () => {
    console.log(state.user.email);
    const payload = await getCollection('tasks', state.user.email);
    dispatch({
      payload,
      type: GET_TASKS,
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

  return (
    <FireBaseContext.Provider
      value={{
        projects: state.projects,
        tasks: state.tasks,
        initializing: state.initializing,
        user: state.user,
        getProjects,
        getTasks,
        setUser,
        setInitializing,
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
