/* eslint-disable no-underscore-dangle */
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
  firestore()
    .collection(name)
    .add(obj)
    .then(() => {
      console.log('Document created!');
    });
};

export { getCollection, addDocument };
