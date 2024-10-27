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
    const description =
      product.description.length > 100
        ? `${product?.description.replace(/<[^>]*>/g, '').slice(0, 120)}...`
        : product?.description.replace(/<[^>]*>/g, '');

    return {
      id: product?.variants[0]?.id,
      name: product?.name,
      description: description || 'No description.',
      fullDescription: product?.description,
      price: newPrice,
      image:
        product.assets?.[0]?.preview ||
        'https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png',
    };
  });
};
