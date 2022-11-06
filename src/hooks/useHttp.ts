import { useAuthContext } from '@/context/AuthContext';
import http from '@/utils/http';

const useHttp = () => {
  const { user } = useAuthContext();

  // TODO: 理解Parameters
  return (...[url, config]: Parameters<typeof http>) => http(url, {
    ...config,
    token: user?.token,
  });
};

export default useHttp;
