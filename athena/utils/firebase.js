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

export { getCollection, addDocument, updateDocument };
