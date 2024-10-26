import { createContext, useEffect, useMemo, useState } from 'react';
import { getItem } from '../utils/storage';

interface ProductProviderProps {
  children: React.ReactNode;
}

interface IOrderContext {
  subTotal: number;
  setSubTotal: (value: number) => void;
}

export const OrderContext = createContext({} as IOrderContext);

export const OrderProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    if (getItem('subTotal')) {
      setSubTotal(Number(getItem('subTotal')) || 0);
    }
  }, []);

  const values = useMemo(
    () => ({
      subTotal,
      setSubTotal,
    }),
    [subTotal, setSubTotal]
  );

  return (
    <OrderContext.Provider value={values}>{children}</OrderContext.Provider>
  );
};
