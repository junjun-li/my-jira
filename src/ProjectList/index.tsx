import React, { useState, useEffect } from 'react';
import type { FC } from 'react';
import List from '@/ProjectList/List';
import SearchPanel from '@/ProjectList/SearchPanel';
import { useDebounce, useMount } from '@/utils';
import { getProjects, getUsers } from '@/api';
import { pickBy } from 'lodash';

const ProjectList: FC = () => {
  const [users, setUsers] = useState([]);
  const [param, setParam] = useState({
    name: '',
    personId: '',
  });
  const [list, setList] = useState([]);

  const debounceParam = useDebounce(param, 1000);
  useEffect(() => {
    (async function () {
      const { data } = await getProjects(pickBy(debounceParam));
      setList(data);
    })();
  }, [debounceParam]);

  useMount(async () => {
    const { data } = await getUsers();
    setUsers(data);
  });

  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  );
};

export default ProjectList;