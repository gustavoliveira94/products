import { useProducts } from 'core/hooks/useProducts/useProducts';
import { Product, ProductList } from 'presentation/components';

export const Home: React.FC = () => {
  const { products, loading, buyProduct } = useProducts();

  return (
    <ProductList loading={loading}>
      {products.length
        ? products.map((product) => {
            return (
              <Product
                key={product.id}
                product={product}
                buyProduct={buyProduct}
              />
            );
          })
        : 'No products found!'}
    </ProductList>
  );
};
