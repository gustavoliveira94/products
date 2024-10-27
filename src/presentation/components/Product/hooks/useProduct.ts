import { useState } from 'react';

export const useProduct = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = ({ value }: { value: number }) => {
    const itIsLessThanOne = value < 1;

    if (itIsLessThanOne) {
      return;
    }

    setQuantity(value);
  };

  return {
    handleQuantity,
    quantity,
  };
};
