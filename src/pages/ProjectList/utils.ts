import useUrlQueryParams from '@/hooks/useUrlQueryParams';
import { useMemo } from 'react';

export const useProjectSearchParams = () => {
  const [param, setParam] = useUrlQueryParams(['name', 'personId']);

  return [
    useMemo(() => ({
      ...param,
      personId: Number(param.personId) || undefined,
    }), [param]),
    setParam,
  ] as const;
};