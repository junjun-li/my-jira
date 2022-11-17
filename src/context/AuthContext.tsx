import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import * as auth from '@/authProvider';
import { getToken } from '@/authProvider';
import { User } from '@/pages/ProjectList/type';
// import useHttp from '@/hooks/useHttp';
import http from '@/utils/http';

const localStorageKey = '__auth_provider_token__';

interface AuthForm {
  username: string;
  password: string;
}

export interface IAuthContext {
  user: any;
  login: (form: AuthForm) => Promise<void>;
  register: (form: AuthForm) => Promise<void>;
  logout: () => void;
}

// 1. 定义context
const AuthContext = createContext<IAuthContext | undefined>(undefined);

AuthContext.displayName = 'AuthContext';

// 2. 定义Provider
// 4. 哪里需要这个数据,就在哪里引入消费这个Provider
// <AuthProvider>
//   <App />
// </AuthProvider>
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // const http = useHttp();
  const [user, setUser] = useState<User | null>(null);
  const login = (form: AuthForm) => auth.login(form).then(setUser);
  const register = (form: AuthForm) => auth.register(form).then(setUser);
  const logout = () => auth.logout().then(() => setUser(null));

  useEffect(() => {
    (async function () {
      let user = null;
      const token = getToken();
      if (token) {
        const data = await http('/me', { token });
        user = data.user;
      }
      setUser(user);
    })();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// 3. 自定义hooks方便在各组件中使用
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    // throw new Error('useAuthContext must be use within a AuthProvider');
    throw new Error('useAuth必须在AuthProvider中使用');
  }
  return context;
};
