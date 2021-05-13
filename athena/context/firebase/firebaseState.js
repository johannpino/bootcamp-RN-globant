/* eslint-disable react/destructuring-assignment */

import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import {
  SET_PROJECTS,
  SET_TASKS,
  SET_INITIALIZING,
  SET_USER,
  SET_MESSAGES,
} from '../../types';
import {
  addProject,
  addTask,
  addMessage,
  subscribe,
} from '../../utils/firebase';
import FireBaseReducer from './firebaseReducer';
import FireBaseContext from './firebaseContext';

const FirebaseState = (props) => {
  const initialState = {
    projects: [],
    user: {},
    tasks: [],
    messages: [],
    initializing: true,
  };
  const [state, dispatch] = useReducer(FireBaseReducer, initialState);

  // CRUD
  const setProjects = async (payload) => {
    dispatch({
      payload,
      type: SET_PROJECTS,
    });
  };

  const setTasks = (tasks) => {
    dispatch({
      payload: tasks,
      type: SET_TASKS,
    });
  };

  const setUser = (user) => {
    dispatch({
      payload: user,
      type: SET_USER,
    });
  };

  const setMessages = (messages) => {
    dispatch({
      payload: messages,
      type: SET_MESSAGES,
    });
  };

  const setInitializing = (bool) => {
    dispatch({
      type: SET_INITIALIZING,
      payload: bool,
    });
  };

  // OBSERVERS

  // Projects
  useEffect(() => {
    const subscriber = subscribe('projects', 'date', 'desc', setProjects);
    return () => subscriber();
  }, []);

  // Tasks
  useEffect(() => {
    const subscriber = subscribe('tasks', 'date', 'desc', setTasks);
    return () => subscriber();
  }, []);

  // Messages
  useEffect(() => {
    const subscriber = subscribe('messages', 'date', 'asc', setMessages);
    return () => subscriber();
  }, []);

  return (
    <FireBaseContext.Provider
      value={{
        projects: state.projects,
        tasks: state.tasks,
        initializing: state.initializing,
        user: state.user,
        messages: state.messages,
        setUser,
        setInitializing,
        addProject,
        addTask,
        addMessage,
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
