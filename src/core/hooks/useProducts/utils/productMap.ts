import { IProductList } from '../../../entities/Product';

interface IProductMap {
  products: IProductList['items'];
}

export const productMap = ({ products }: IProductMap) => {
  return products.map((product) => {
    const newPrice = new Intl.NumberFormat('en-US', {
      currency: 'USD',
      style: 'currency',
    }).format(product.variants?.[0]?.price);

    return {
      id: product?.variants[0]?.id,
      name: product?.name,
      description:
        product?.description.replace(/<[^>]*>/g, '') || 'No description.',
      price: newPrice,
      image:
        product.assets?.[0]?.preview ||
        'https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png',
    };
  });
};
