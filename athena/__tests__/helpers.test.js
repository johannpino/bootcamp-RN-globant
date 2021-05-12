const {
  capitalizeFirstLetter,
  getFirstLetter,
  getUserProyects,
  getCurrentProject,
  getUserTasks,
  projectHasTasks,
  getProjectTasks,
  getCompletedTasks,
  filterProjects,
  userHasProjects,
  userHasTasks,
  formatDescription,
  welcomeText,
} = require('../utils/helpers');

test('should return string with capitalized first letter', () => {
  const text = capitalizeFirstLetter('text');
  expect(text).toBe('Text');
});

test('should return first char at string', () => {
  const text = getFirstLetter('text');
  expect(text).toBe('t');
});

test('should return only the users projects', () => {
  const projects = [
    { key: '1', owners: ['john'] },
    { key: '2', owners: ['sophie'] },
    { key: '3', owners: ['sophie', 'john'] },
  ];
  const owner = 'john';
  const filteredProjects = getUserProyects(projects, owner);
  expect(filteredProjects).toStrictEqual([
    { key: '1', owners: ['john'] },
    { key: '3', owners: ['sophie', 'john'] },
  ]);
});

test('should return a project with an id', () => {
  const projects = [
    { key: '1', owners: ['john'] },
    { key: '2', owners: ['sophie'] },
    { key: '3', owners: ['sophie', 'john'] },
  ];
  const id = '1';
  const project = getCurrentProject(projects, id);
  expect(project).toStrictEqual([{ key: '1', owners: ['john'] }]);
});

test('should return user tasks', () => {
  const tasks = [
    { projectId: '1', owner: 'john' },
    { projectId: '2', owner: 'sophie' },
    { projectId: '3', owner: 'sophie' },
  ];
  const owner = 'sophie';
  const filteredTasks = getUserTasks(tasks, owner);
  expect(filteredTasks).toStrictEqual([
    { projectId: '2', owner: 'sophie' },
    { projectId: '3', owner: 'sophie' },
  ]);
});

test('should return if the project has tasks', () => {
  const tasks = [
    { projectId: '1', owner: 'john' },
    { projectId: '2', owner: 'sophie' },
    { projectId: '1', owner: 'john' },
  ];
  const project1 = projectHasTasks(tasks, '1');
  const project2 = projectHasTasks(tasks, '3');
  expect(project1).toBe(true);
  expect(project2).toBe(false);
});

test('should return the project tasks specifying if completed or not', () => {
  const tasks = [
    { projectId: '1', owner: 'john', completed: true },
    { projectId: '1', owner: 'peter', completed: true },
    { projectId: '2', owner: 'sophie', completed: false },
    { projectId: '2', owner: 'mark', completed: true },
  ];
  const project1 = getProjectTasks(tasks, '1', true);
  const project2 = getProjectTasks(tasks, '2', false);

  expect(project1).toStrictEqual([
    { projectId: '1', owner: 'john', completed: true },
    { projectId: '1', owner: 'peter', completed: true },
  ]);
  expect(project2).toStrictEqual([
    { projectId: '2', owner: 'sophie', completed: false },
  ]);
});

test('should return the project completed tasks', () => {
  const tasks = [
    { projectId: '1', owner: 'john', completed: true },
    { projectId: '1', owner: 'peter', completed: true },
    { projectId: '2', owner: 'sophie', completed: false },
    { projectId: '2', owner: 'mark', completed: true },
  ];
  const filteredTasks = getCompletedTasks(tasks);

  expect(filteredTasks).toStrictEqual([
    { projectId: '1', owner: 'john', completed: true },
    { projectId: '1', owner: 'peter', completed: true },
    { projectId: '2', owner: 'mark', completed: true },
  ]);
});

test('should return filtered projects from the query', () => {
  const projects = [
    { key: '1', name: 'Pokemon App' },
    { key: '2', name: 'Weather App' },
    { key: '3', name: 'App' },
  ];

  const query = 'pokemon';
  const filteredProjects = filterProjects(projects, query);
  expect(filteredProjects).toStrictEqual([{ key: '1', name: 'Pokemon App' }]);
});

test('should return if user has projects', () => {
  const projects = [
    { key: '1', owners: ['john'] },
    { key: '2', owners: ['sophie'] },
    { key: '3', owners: ['sophie', 'john'] },
  ];
  const user1 = userHasProjects(projects, 'john');
  const user2 = userHasProjects(projects, 'peter');
  expect(user1).toBe(true);
  expect(user2).toBe(false);
});

test('should return if user has tasks', () => {
  const tasks = [
    { projectId: '1', owner: 'john' },
    { projectId: '2', owner: 'sophie' },
    { projectId: '1', owner: 'john' },
  ];
  const user1 = userHasTasks(tasks, 'john');
  const user2 = userHasTasks(tasks, 'peter');

  expect(user1).toBe(true);
  expect(user2).toBe(false);
});

test('should return formated description according to the number of tasks', () => {
  const tasksRemaining = 5;

  const zeroTasks = formatDescription(0);
  const oneTask = formatDescription(1);
  const morethanOneTask = formatDescription(tasksRemaining);
  const moreThan99Tasks = formatDescription(420);

  expect(zeroTasks).toStrictEqual('No hay tareas');
  expect(oneTask).toStrictEqual('1 tarea pendiente');
  expect(morethanOneTask).toStrictEqual(`${tasksRemaining} tareas pendientes`);
  expect(moreThan99Tasks).toStrictEqual('+99 tareas pendientes');
});
