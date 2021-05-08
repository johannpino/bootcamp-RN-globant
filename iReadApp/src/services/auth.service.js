import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {USERS} from './constants';

const Auth = {
  signupWithEmail: (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  },
  checkUserAuth: user => {
    return auth().onAuthStateChanged(user);
  },

  createNewUser: userData => {
    return firestore().collection(USERS).doc(`${userData.uid}`).set(userData);
  },
};

export default Auth;
