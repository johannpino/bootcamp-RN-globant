/* eslint-disable no-underscore-dangle */
/* eslint-disable implicit-arrow-linebreak */
export const capitalizeFirstLetter = (string) =>
  `${string.charAt(0).toUpperCase()}${string.slice(1)}`;

export const getFirstLetter = (string) => string.charAt(0);

export const getCompletedTasks = (tasks) =>
  tasks.filter((task) => task._data.completed);

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
    const { name } = project._data;
    return name.toLowerCase().includes(query.toLowerCase());
  });
  return result;
};
