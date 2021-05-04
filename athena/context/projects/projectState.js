import React, { useReducer } from 'react';

import projectReducer from './projectReducer';
import ProjectContext from './projectContext';

const ProjectState = (props) => {
  const initialState = {
    project: [],
  };

  const [state, dispatch] = useReducer(projectReducer, initialState);

  return (
    <ProjectContext.Provider value={{ project: state.project }}>
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectState;
