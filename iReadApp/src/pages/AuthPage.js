import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import SignUp from '../components/signup/Signup';

const AuthPage = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <SignUp />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AuthPage;
