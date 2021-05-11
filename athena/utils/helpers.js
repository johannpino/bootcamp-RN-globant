/* eslint-disable implicit-arrow-linebreak */

export const capitalizeFirstLetter = (string) =>
  `${string.charAt(0).toUpperCase()}${string.slice(1)}`;

export const getFirstLetter = (string) => string.charAt(0);

export const getUserProyects = (proyects, owner) =>
  proyects.filter((proyect) => proyect.owners.includes(owner));

export const getUserTasks = (tasks, owner) =>
  tasks.filter((task) => task.owner === owner);

export const getCurrentProject = (projects, id) =>
  projects.filter((project) => project.key === id);

export const getCompletedTasks = (tasks) =>
  tasks.filter((task) => task.completed);

export const formatDescription = (tasksRemaining) => {
  if (tasksRemaining === 0) {
    return 'No hay tareas';
  }
  if (tasksRemaining === 1) {
    return '1 tarea pendiente';
  }
  if (tasksRemaining > 99) {
    return '+99 tareas pendientes';
  }
  return `${tasksRemaining} tareas pendientes`;
};

export const filterProjects = (projects, query) => {
  if (query.trim() === '') return [];
  const result = projects.filter((project) => {
    const { name } = project;
    return name.toLowerCase().includes(query.toLowerCase());
  });
  return result;
};
