import { useMutation, useQuery } from '@apollo/client';

import { IProductList } from '../../entities/Product';
import { GET_PRODUCTS } from '../../graphql/queries';
import { MUTATION_ADD_ITEM_TO_ORDER } from '../../graphql/mutations';
import { useStateWithStorage } from '../useStateWithStorage';
import { useOrder } from '../useOrder';
import { productMap } from './utils/productMap';

export const useProducts = () => {
  const { setSubTotal } = useOrder();
  const [, setState] = useStateWithStorage({ key: 'subTotal' });

  const [mutateBuyProduct] = useMutation<{
    addItemToOrder: { totalWithTax: number };
  }>(MUTATION_ADD_ITEM_TO_ORDER, {
    onCompleted(data) {
      setSubTotal(data.addItemToOrder.totalWithTax);
      setState(String(data.addItemToOrder.totalWithTax));

      return;
    },
  });

  const { data, loading } = useQuery<{ products: IProductList }>(GET_PRODUCTS);

  const buyProduct = ({
    productVariantId,
    quantity,
  }: {
    productVariantId: string;
    quantity: number;
  }) => {
    mutateBuyProduct({
      variables: {
        productVariantId,
        quantity,
      },
    });
  };

  return {
    products: productMap({ products: data?.products.items || [] }),
    loading,
    buyProduct,
  };
};
