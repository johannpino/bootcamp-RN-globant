import {
  SET_PROJECTS,
  SET_TASKS,
  SET_INITIALIZING,
  SET_USER,
} from '../../types';

export default (state, action) => {
  switch (action.type) {
    case SET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    case SET_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_INITIALIZING:
      return {
        ...state,
        initializing: action.payload,
      };
    default:
      return state;
  }
};
