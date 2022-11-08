import React, { ReactNode } from 'react';
import { AuthProvider } from './AuthContext';
import { QueryClient, QueryClientProvider } from 'react-query';

const Context = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        {children}
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default Context;