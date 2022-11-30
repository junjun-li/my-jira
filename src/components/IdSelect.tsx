import React from 'react';
import { Select } from 'antd';
import { Raw } from '@/types';

type ISelectProps = React.ComponentProps<typeof Select>;

interface IIdSelectProps extends Omit<ISelectProps, 'value' | 'onChange'> {
  value: Raw | null | undefined;
  onChange: (value?: number) => void;
  defaultOptionName?: string;
  options?: { name: string; id: number }[];
}

const IdSelect = (props: IIdSelectProps) => {
  const { value, onChange, defaultOptionName, options, ...restProps } = props;
  return (
    <Select
      value={toNumber(value)}
      onChange={(value) => {
        console.log('toNumber(value)',toNumber(value));
        onChange(toNumber(value) || undefined)
      }}
      {...restProps}
    >
      {defaultOptionName ? (
        <Select.Option value={0}>{defaultOptionName}</Select.Option>
      ) : null}
      {options?.map((option) => (
        <Select.Option key={option.id} value={option.id}>
          {option.name}
        </Select.Option>
      ))}
    </Select>
  );
};

const toNumber = (value: unknown) => (isNaN(Number(value)) ? 0 : Number(value));

export default IdSelect;