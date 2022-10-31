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