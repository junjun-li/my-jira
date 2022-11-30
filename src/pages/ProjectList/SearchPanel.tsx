import type { FC } from 'react';
import React from 'react';
import type { User } from '@/pages/ProjectList/type';
import { Form, Input, Select } from 'antd';
import { Project } from '@/pages/ProjectList/type';
import UserSelect from '@/components/UserSelect';

interface SearchPanelProps {
  users: User[];
  param: Partial<Pick<Project, 'name' | 'personId'>>;
  setParam: any;
}

const SearchPanel: FC<SearchPanelProps> = ({ users, param, setParam }) => {
  return (
    <Form style={{ marginBottom: '2rem' }} layout={'inline'}>
      <Form.Item>
        <Input
          type="text"
          value={param.name}
          onChange={(evt) =>
            setParam({
              ...param,
              name: evt.target.value,
            })
          }
        />
      </Form.Item>
      <Form.Item>
        <UserSelect
          defaultOptionName="负责人"
          value={param.personId}
          onChange={(value) => {
            console.log('UserSelect',value);
            setParam({
              ...param,
              personId: value,
            });
          }}
        />
        {/*<Select*/}
        {/*  value={param.personId}*/}
        {/*  onChange={(value) =>*/}
        {/*    setParam({*/}
        {/*      ...param,*/}
        {/*      personId: value,*/}
        {/*    })*/}
        {/*  }*/}
        {/*>*/}
        {/*  <Select.Option value={''}>负责人</Select.Option>*/}
        {/*  {users.map((user) => (*/}
        {/*    <Select.Option key={user.id} value={`${user.id}`}>*/}
        {/*      {user.name}*/}
        {/*    </Select.Option>*/}
        {/*  ))}*/}
        {/*</Select>*/}
      </Form.Item>
    </Form>
  );
};

export default SearchPanel;