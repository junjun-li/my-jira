import React from 'react';
import IdSelect from '@/components/IdSelect';
import { useUsers } from '@/hooks/useData';

const UserSelect = (props: React.ComponentProps<typeof IdSelect>) => {
  const users = useUsers();

  return (
    <IdSelect options={users || []} {...props} />
  );
};

export default UserSelect;