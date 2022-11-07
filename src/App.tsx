import React from 'react';
import UnauthenticatedApp from '@/UnauthenticatedApp';
import { useAuthContext } from '@/context/AuthContext';
import AuthenticatedApp from '@/AuthenticatedApp';
import './App.css';

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      {
        user ? <AuthenticatedApp /> : <UnauthenticatedApp />
      }
    </div>
  );
}

export default App;
