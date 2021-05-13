import React, { useState, useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import AuthStack from './AuthStack';
<<<<<<< HEAD
import {AuthContext} from './AuthProvider';
import DrawerNavigation from './DrawerNavigation';
=======
import { AuthContext } from './AuthProvider';
import DrawerNav from './DrawerNavigation';
>>>>>>> 4365842e0636bf2298c985d67f1a6991933133bc

const Routes = () => {
  const { user, setUser } = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);
  // eslint-disable-next-line no-shadow
  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  };
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (initializing) {
    return null;
  }

  return (
    <NavigationContainer>
      {user ? <DrawerNavigation /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
