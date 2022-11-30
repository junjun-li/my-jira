// 复用一些请求结果
import { useEffect, useState } from 'react';
import useHttp from '@/hooks/useHttp';

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const http = useHttp();

  useEffect(() => {
    if (users?.length > 0) {
      return;
    }
    http('/users').then(setUsers);
  }, []);

  return users
}