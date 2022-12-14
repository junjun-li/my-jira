import React, { useEffect, useState } from 'react';
import List from '@/pages/ProjectList/List';
import SearchPanel from '@/pages/ProjectList/SearchPanel';
import { useDebounce } from '@/utils';
import { pickBy } from 'lodash';
import useHttp from '@/hooks/useHttp';
import useAsync from '@/hooks/useAsync';
import styled from 'styled-components';
import { Project } from '@/pages/ProjectList/type';
import useTitle from '@/hooks/useTitle';
import useUrlQueryParams from '@/hooks/useUrlQueryParams';
import { useProjectSearchParams } from '@/pages/ProjectList/utils';
import { useUsers } from '@/hooks/useData';

const ProjectList: React.FC = () => {
  useTitle('吃饭睡觉打豆豆', true);
  const http = useHttp();
  // const [, setParam] = useState({
  //   name: '',
  //   personId: '',
  // });
  const [param, setParam] = useProjectSearchParams();
  // setParam({ name1: '张三' });

  const debounceParam = useDebounce(param, 200);

  const {
    isLoading,
    data,
    isError,
    run: getData,
  } = useAsync<Project[]>(() => http('/projects', { data: pickBy(debounceParam) }));

  const users = useUsers();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [debounceParam]);

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

// @ts-ignore
// 注入,开启插件判断为啥会渲染
ProjectList.whyDidYouRender = true;

const Container = styled.div`
  padding: 3.2rem;
`;

export default ProjectList;