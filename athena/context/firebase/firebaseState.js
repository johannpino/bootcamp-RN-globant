import React, { useReducer } from 'react';

import FireBaseReducer from './firebaseReducer';
import FireBaseContext from './firebaseContext';

const FirebaseState = (props) => {
  const initialState = {
    projects: [],
    users: [],
    tasks: [],
  };

  const [state, dispatch] = useReducer(FireBaseReducer, initialState);

  return (
    <FireBaseContext.Provider
      value={{ projects: state.projects, users: state.users, tasks: state.tasks }}
    >
      {props.children}
    </FireBaseContext.Provider>
  );
};

export default FirebaseState;
