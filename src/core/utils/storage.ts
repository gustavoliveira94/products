const getItem = (key: string): string | null => {
  return localStorage.getItem(key);
};

const setItem = (key: string, value: string): void => {
  localStorage.setItem(key, value);
};

export { getItem, setItem };
