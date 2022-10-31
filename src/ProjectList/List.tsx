import React from 'react';
import type { FC } from 'react';
import type { User, Project } from '@/ProjectList/type';

interface ListProps {
  list: Project[];
  users: User[];
}

const List: FC<ListProps> = ({ list, users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((project) => (
          <tr key={project.id}>
            <td>{project.name}</td>
            <td>
              {
                users.find((user) => user.id === project.personId)?.name ||
                '未知'
              }
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default List;