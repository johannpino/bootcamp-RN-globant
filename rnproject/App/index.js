import React from 'react';
import Routes from './config/Routes';
import { AuthProvider } from './config/AuthProvider';

const Providers = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default Providers;
