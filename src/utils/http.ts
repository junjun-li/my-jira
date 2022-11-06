import qs from 'qs';
import * as auth from '@/authProvider';

const apiUrl = process.env.REACT_APP_API_URL;

interface IConfig extends RequestInit {
  token?: string;
  data?: any;
}

const http = (
  url: string,
  { data, token, headers, ...customConfig }: IConfig = {},
) => {
  const config = {
    method: 'GET',
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
      'Content-Type': data ? 'application/json' : '',
    },
    ...customConfig,
  };

  if (config.method.toUpperCase() === 'GET') {
    url += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }

  return window
    .fetch(`${apiUrl}${url}`, config)
    .then(async (res) => {
      if (res.status === 401) {
        await auth.logout();
        window.location.reload();
        return Promise.reject({ message: '请重新登录' });
      }
      const data = await res.json();
      if (res.ok) {
        return data;
      } else {
        // 如果api接口报错了 fetch 不会帮我们抛出错误,需要手动抛出
        return Promise.reject(data);
      }
    });
};

export default http;
