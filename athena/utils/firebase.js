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

export default getCollection;
