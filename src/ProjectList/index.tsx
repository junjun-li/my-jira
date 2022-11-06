import type { FC } from 'react';
import React, { useEffect, useState } from 'react';
import List from '@/ProjectList/List';
import SearchPanel from '@/ProjectList/SearchPanel';
import { useDebounce, useMount } from '@/utils';
import { pickBy } from 'lodash';
import useHttp from '@/hooks/useHttp';

const ProjectList: FC = () => {
  const http = useHttp();
  const [users, setUsers] = useState([]);
  const [param, setParam] = useState({
    name: '',
    personId: '',
  });
  const [list, setList] = useState([]);

  const debounceParam = useDebounce(param, 1000);
  useEffect(() => {
    (async function () {
      // const { data } = await getProjects(pickBy(debounceParam));
      // setList(data);
      http('/projects', { data: pickBy(debounceParam) }).then(setList);
    })();
  }, [debounceParam]);

  useMount(async () => {
    // const { data } = await getUsers();
    // setUsers(data);
    http('/users').then(setUsers);
  });

  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  );
};

export default ProjectList;