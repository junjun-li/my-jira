import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';

// 返回页面url中,指定键的参数值
const useUrlQueryParams = <T extends string>(keys: T[]) => {
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams.get('name'));
  return [
    useMemo(
      () => keys.reduce((prev, key) => {
        return {
          ...prev,
          [key]: searchParams.get(key) || '',
        };
      }, {} as { [key in T]: string }),
      [searchParams],
    ),
    setSearchParams,
  ] as const;
};

export default useUrlQueryParams;

const arr1 = [1, '2', {}, []];
const arr2 = [1, '2', {}, []] as const;
