import React from 'react';
import Auth, {FirebaseProvider} from './src/context/FirebaseContext';
import AuthPage from './src/pages/AuthPage';

const App = () => {
  return (
    <FirebaseProvider value={Auth}>
      <AuthPage />
    </FirebaseProvider>
  );
};

export default App;
