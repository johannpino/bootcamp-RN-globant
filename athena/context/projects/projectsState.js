/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-underscore-dangle */
import React, { useReducer } from 'react';
import PropTypes, { bool } from 'prop-types';
import { SET_FILTERED_PROJECTS, SET_NEW_PROJECT } from '../../types';
import ProjectsContext from './projectsContext';
import ProjectsReducer from './projectsReducer';

const ProjectsState = (props) => {
  const initialState = {
    filteredProjects: [],
    newProject: false,
  };
  const [state, dispatch] = useReducer(ProjectsReducer, initialState);

  // CRUD
  const setFilteredProjects = (projects) => {
    dispatch({
      type: SET_FILTERED_PROJECTS,
      payload: projects,
    });
  };

  const setNewProject = (bool) => {
    dispatch({
      type: SET_NEW_PROJECT,
      payload: bool,
    });
  };

  return (
    <ProjectsContext.Provider
      value={{
        filteredProjects: state.filteredProjects,
        newProject: state.newProject,
        setFilteredProjects,
        setNewProject,
      }}
    >
      {props.children}
    </ProjectsContext.Provider>
  );
};

ProjectsState.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectsState;
