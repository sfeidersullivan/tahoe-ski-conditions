import { localStorageKey, mountainMap } from '../constants';

const browserLocalStorage = (typeof window !== 'undefined' && window.localStorage)
  || { getItem: () => {}, setItem: () => {}};

const getCache = () => {
  const cache = browserLocalStorage.getItem(localStorageKey);
  return cache ? JSON.parse(cache) : {};
};
const setCache = newCache => browserLocalStorage.setItem(localStorageKey, JSON.stringify(newCache));

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
