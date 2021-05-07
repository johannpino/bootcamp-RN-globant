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
    return `${tasksRemaining} tarea pendiente`;
  }
  if (tasksRemaining > 99) {
    return '+99 tareas pendientes';
  }
  return `${tasksRemaining} tareas pendientes`;
};
