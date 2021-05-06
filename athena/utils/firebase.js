import firestore from '@react-native-firebase/firestore';

const getCollection = async (name, owner) => {
  const fetchedCollection = await firestore()
    .collection(name)
    .where('owner', '==', owner)
    .get()
    // eslint-disable-next-line no-underscore-dangle
    .then((collection) => collection._docs);
  return fetchedCollection;
};

export default getCollection;
