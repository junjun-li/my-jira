import { useState } from 'react';

interface IState<T> {
  error: Error | null;
  data: T | null;
  state: 'idle' | 'loading' | 'error' | 'success';
}

const useAsync = <T>(promise: () => Promise<T>) => {
  const [state, setState] = useState<IState<T>>({
    error: null,
    data: null,
    state: 'idle',
  });

  const setData = (data: T) => setState({
    error: null,
    data,
    state: 'success',
  });

  const setError = (error: Error) => setState({
    error,
    data: null,
    state: 'error',
  });

  const run = () => {
    setState((prev) => ({ ...prev, state: 'loading' }));
    return promise()
      .then(res => {
        setData(res);
        return res;
      })
      .catch(err => {
        setError(err);
        return err;
      });
  };
  return {
    isIdle: state.state === 'idle',
    isLoading: state.state === 'loading',
    isError: state.state === 'error',
    isSuccess: state.state === 'success',
    run,
    setData,
    setError,
    ...state,
  };
};

export default useAsync;