/* eslint-disable implicit-arrow-linebreak */

export const formatTime = (time) => (time < 10 ? `0${time}` : time);

export const capitalizeFirstLetter = (string) =>
  `${string.charAt(0).toUpperCase()}${string.slice(1)}`;

export const getFirstLetter = (string) => string.charAt(0);

export const getUserProjects = (projects, owner) =>
  projects.filter((project) => project.owners.includes(owner));

export const getCurrentProject = (projects, id) =>
  projects.filter((project) => project.key === id);

export const getUserTasks = (tasks, owner) =>
  tasks.filter((task) => task.owner === owner);

export const projectHasTasks = (tasks, projectId) => {
  const projectTasks = tasks.filter((task) => task.projectId === projectId);
  return projectTasks.length > 0;
};

export const getProjectTasks = (tasks, projectId, completed) =>
  tasks.filter(
    (task) => task.projectId === projectId && task.completed === completed
  );

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

export const welcomeText = () => {
  const today = new Date();
  const current = today.getHours();

  if (current < 12) {
    return 'Buenos días';
  }
  if (current < 18) {
    return 'Buenas tardes';
  }
  return 'Buenas noches';
};

export const userHasProjects = (projects, owner) =>
  getUserProjects(projects, owner).length > 0;

export const userHasTasks = (tasks, owner) =>
  getUserTasks(tasks, owner).length > 0;

export const getProjectMessages = (messages, key) =>
  messages.filter((message) => message.projectId === key);
