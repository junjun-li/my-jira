import axios from '@/utils/request';

export const getProjects = (data?: any) => axios.get('/projects', {
  params: data,
});

export const getUsers = () => axios.get('/users');

export const login = (data: any) => axios.post('/login', data);

export const register = (data: any) => axios.post('/register', data);