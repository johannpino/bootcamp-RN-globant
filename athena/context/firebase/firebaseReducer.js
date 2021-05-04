import { GET_PROJECTS, GET_TASKS } from '../../types';
export default (state, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };

    default:
      return state;
  }
};
