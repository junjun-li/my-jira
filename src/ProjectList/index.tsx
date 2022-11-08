import React, { useEffect, useState } from 'react';
import List from '@/ProjectList/List';
import SearchPanel from '@/ProjectList/SearchPanel';
import { useDebounce } from '@/utils';
import { pickBy } from 'lodash';
import useHttp from '@/hooks/useHttp';
import useAsync from '@/hooks/useAsync';
import styled from 'styled-components';
import { Project } from '@/ProjectList/type';

const ProjectList: React.FC = () => {
  const http = useHttp();
  const [users, setUsers] = useState([]);
  const [param, setParam] = useState({
    name: '',
    personId: '',
  });
  const [list, setList] = useState([]);

  const debounceParam = useDebounce(param, 1000);
  const {
    isLoading,
    data,
    isError,
    run: getData,
  } = useAsync<Project[]>(() => http('/projects', { data: pickBy(debounceParam) }));

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    http('/users').then(setUsers);
  }, []);

  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List
        users={users}
        dataSource={data || []}
        loading={isLoading}
      />
    </Container>
  );
};

const Container = styled.div`
  padding: 3.2rem;
`;

export default ProjectList;