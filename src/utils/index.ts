import { useEffect, useState } from 'react';

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

// export const debounce = (func, delay) => {
//   let time;
//   return (...param) => {
//     if (time) {
//       clearTimeout(time);
//     }
//     time = setTimeout(() => {
//       func(...param);
//     }, delay);
//   };
// };

export const useDebounce = <T>(value: T, delay?: number) => {
  const [val, setVal] = useState(value);
  console.log('useDebounce value', value);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setVal(value);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);

  return val;
};

/** 判断一个对象是不是空值 */
export const isVoid = (value: unknown) => value === undefined || value === null || value === '';

/** 删除一个对象中空值的属性 */
export const cleanObject = (object: { [key: string]: unknown }) => {
  // Object.assign({}, object)
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isVoid(value)) {
      delete result[key];
    }
  });
  return result;
};