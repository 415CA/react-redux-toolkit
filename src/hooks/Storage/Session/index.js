import { useEffect, useState } from 'react';

const useSessionStorage = (sessionStorageKey) => {
  const [value, setValue] = useState(localStorage.getItem(sessionStorageKey) || '');

  useEffect(() => {
    localStorage.setItem(sessionStorageKey, value);
  }, [value]);

  return [value, setValue];
};

export default useSessionStorage;
