import React, { ReactNode } from 'react';
import { AuthProvider } from './AuthContext';

const Context = ({ children }: { children: ReactNode }) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
};

export default Context;