import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';
import { URLSearchParamsInit } from 'react-router-dom/dist/dom';
import { cloneDeep } from 'lodash';
// 返回页面url中,指定键的参数值
const useUrlQueryParams = <T extends string>(keys: T[]) => {
  const [searchParams, setSearchParams] = useSearchParams();

  // console.log(searchParams.get('name'));
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
    (param: Partial<{ [key in T]: unknown }>) => {
      console.log('param', param);
      // Object.fromEntries
      // iterator: 迭代器
      // 部署了iterator的 [],{},Map 有个特点,就是可以使用for..of
      // console.log('prevParam', Object.fromEntries(prevParam));
      const o = cloneDeep({
        ...Object.fromEntries(searchParams),
        ...param,
      }) as URLSearchParamsInit;

      // console.log(o);
      return setSearchParams(o);
    },
  ] as const;
};

export default useUrlQueryParams;

const arr1 = [1, '2', {}, []];
const arr2 = [1, '2', {}, []] as const;
