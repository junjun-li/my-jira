import React from 'react';
import UnauthenticatedApp from '@/UnauthenticatedApp';
import { useAuthContext } from '@/context/AuthContext';
import AuthenticatedApp from '@/AuthenticatedApp';
import './App.css';
import ErrorBoundary from '@/components/ErrorBoundary';
import { FullPageErrorFallback } from "@/components/lib";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <ErrorBoundary fallbackRender={FullPageErrorFallback}>
        {
          user ? <AuthenticatedApp /> : <UnauthenticatedApp />
        }
      </ErrorBoundary>
    </div>
  );
}

export default App;
