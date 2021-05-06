import { SET_FILTERED_PROJECTS, SET_NEW_PROJECT } from '../../types';

export default (state, action) => {
  switch (action.type) {
    case SET_FILTERED_PROJECTS:
      return {
        ...state,
        filteredProjects: action.payload,
      };
    case SET_NEW_PROJECT:
      return {
        ...state,
        newProject: action.payload,
      };
    default:
      return state;
  }
};
