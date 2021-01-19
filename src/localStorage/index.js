import { localStorageKey, mountainMap } from '../constants';

const getCache = () => JSON.parse(localStorage.getItem(localStorageKey)) || {};
const setCache = newCache => localStorage.setItem(localStorageKey, JSON.stringify(newCache));

export const setMountains = mountains => {
  const cache = getCache();
  const newCache = {
    ...cache,
    mountains: mountains.filter(m => mountainMap[m]),
  };
  setCache(newCache);
};

export const getMountains = () => {
  const cache = getCache();
  const { mountains } = cache;
  return mountains || [];
};
