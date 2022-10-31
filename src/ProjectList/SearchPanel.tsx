import React from 'react';
import type { FC } from 'react';
import type { User } from '@/ProjectList/type';

interface SearchPanelProps {
  users: User[];
  param: {
    name: string;
    personId: string;
  };
  setParam: any;
}

const SearchPanel: FC<SearchPanelProps> = ({ users, param, setParam }) => {
  return (
    <form>
      <input
        type="text"
        value={param.name}
        onChange={(e) => {
          setParam({
            ...param,
            name: e.target.value,
          });
        }}
      />
      <select
        value={param.personId}
        onChange={(e) => {
          setParam({
            ...param,
            personId: e.target.value,
          });
        }}
      >
        <option value={''}>负责人</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </form>
  );
};

export default SearchPanel;