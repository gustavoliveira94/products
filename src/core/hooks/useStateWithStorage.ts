import { getItem, setItem } from '../utils/storage';

interface IUseStateWithStorage {
  key: string;
}

export const useStateWithStorage = ({ key }: IUseStateWithStorage) => {
  return [() => getItem(key), (value: string) => setItem(key, value)];
};
