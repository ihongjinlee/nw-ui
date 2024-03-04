import { createContext, useContext } from 'react';

type CacheUIValue = {
  id: string;
};

export const CacheUIContext = createContext<CacheUIValue>({
  id: '',
});

export const useCacheUI = () => useContext(CacheUIContext);
