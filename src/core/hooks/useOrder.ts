import { useContext } from 'react';

import { OrderContext } from '../providers/OrderProvider';

export const useOrder = () => {
  const { subTotal: total, setSubTotal } = useContext(OrderContext);

  const subTotal = new Intl.NumberFormat('en-US', {
    currency: 'USD',
    style: 'currency',
  }).format(total);

  return {
    subTotal,
    setSubTotal,
  };
};
