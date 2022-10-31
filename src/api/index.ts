import axios from '@/utils/request';

export const getProjects = (data?: any) => axios.get('/projects', {
  params: data,
});

export const getUsers = () => axios.get('/users');