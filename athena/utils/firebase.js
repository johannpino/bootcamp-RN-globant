/* eslint-disable no-underscore-dangle */
/* eslint-disable object-curly-newline */
import firestore from '@react-native-firebase/firestore';

const getCollection = async (name, owner) => {
  const fetchedCollection = await firestore()
    .collection(name)
    .where('owner', '==', owner)
    .get()
    .then((collection) => collection._docs);
  return fetchedCollection;
};

const addDocument = async (name, obj) => {
  await firestore().collection(name).add(obj);
};

const updateDocument = async (collection, key, obj) => {
  await firestore().collection(collection).doc(key).update(obj);
};

const addProject = (project) => {
  addDocument('projects', project);
};

const addTask = (task) => {
  addDocument('tasks', task);
};

const addMessage = (message) => {
  addDocument('messages', message);
};

const subscribe = (collectionName, orderBy, order, setter) => {
  const subscriber = firestore()
    .collection(collectionName)
    .orderBy(orderBy, order)
    .onSnapshot((querySnapshot) => {
      const array = [];

      querySnapshot.forEach((documentSnapshot) => {
        array.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });

      setter(array);
    });
  return subscriber;
};

export {
  getCollection,
  updateDocument,
  addProject,
  addTask,
  addMessage,
  subscribe,
};
