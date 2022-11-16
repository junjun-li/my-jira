import { useEffect, useRef } from 'react';

const useTitle = (title: string, restoreOnUnmount = true) => {
  const oldTitle = useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    return () => {
      if (restoreOnUnmount) {
        document.title = oldTitle.current;
      }
    };
  }, []);
};

export default useTitle;
