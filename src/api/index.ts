import axios from '@/utils/request';

export const getProjects = (data?: any) => axios.get('/projects', {
  params: data,
});

export const getUsers = () => axios.get('/users');

export const login = (data: any): Promise<any> => axios.post('/login', data);

export const register = (data: any): Promise<any> => axios.post('/register', data);