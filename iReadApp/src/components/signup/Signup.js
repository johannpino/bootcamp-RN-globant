import React from 'react';
import firebaseHOC from '../../context/FirebaseContext';
import {TextInput, TouchableOpacity, Text} from 'react-native';

const Signup = ({firebase}) => {
  const handleOnSignup = async values => {
    const {name, email, password} = values;

    try {
      const response = await firebase.signupWithEmail(email, password);
      if (response.user.uid) {
        const {uid} = response.user;
        const userData = {email, name, uid};
        await firebase.createNewUser(userData);
        //navigation.navigate('Home');
      }
    } catch (error) {
      throw new Error({message: error.message});
    }
  };

  const onSubmit = values => {
    handleOnSignup(values);
  };

  return (
    <>
      <TextInput placeholder="Email" />
      <TouchableOpacity onPress={onSubmit}>
        <Text>Registrarme</Text>
      </TouchableOpacity>
    </>
  );
};

export default firebaseHOC(Signup);
