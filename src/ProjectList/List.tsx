import type { FC } from 'react';
import React from 'react';
import type { Project, User } from '@/ProjectList/type';
import { Table } from 'antd';
import dayjs from 'dayjs';
import { TableProps } from 'antd/lib/table/Table';

interface ListProps extends TableProps<Project> {
  users: User[];
}

const List: FC<ListProps> = ({ users, ...props }) => {
  return (
    <Table
      rowKey="id"
      pagination={false}
      columns={[
        {
          title: '名称',
          dataIndex: 'name',
          sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
          title: '部门',
          dataIndex: 'organization',
        },
        {
          title: '负责人',
          render(value, project) {
            return (
              <span>
                {users.find((user) => user.id === project.personId)?.name ||
                '未知'}
              </span>
            );
          },
        },
        {
          title: '创建时间',
          render(value, project) {
            return (
              <span>
                {project.created
                  ? dayjs(project.created).format('YYYY-MM-DD')
                  : '无'}
              </span>
            );
          },
        },
      ]}
      {...props}
    />
  );
};

export default List;