import React from 'react';
import UnauthenticatedApp from '@/UnauthenticatedApp';
import { useAuthContext } from '@/context/AuthContext';
import ProjectList from '@/ProjectList';
import './App.css';

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      {
        user ? <ProjectList /> : <UnauthenticatedApp />
      }
    </div>
  );
}

export default App;
