import React, { FormEvent } from 'react';
import { register } from '@/api';

const Login = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  console.log('apiUrl', apiUrl);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[0] as HTMLInputElement).value;
    register({
      username,
      password,
    }).then(res => {
      console.log(res);
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="username">用户名</label>
        <input id="username" type="text" />
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input id="password" type="text" />
      </div>
      <div>
        {/*<button type="submit">登录</button>*/}
        <button type="submit">注册</button>
      </div>
    </form>
  );
};

export default Login;