import { Loading } from './assets/Loading';

import { ProductListStyles } from './ProductList.styles';

interface ProductListProps {
  children: React.ReactNode;
  loading: boolean;
}

export const ProductList: React.FC<ProductListProps> = ({
  children,
  loading,
}) => {
  if (loading) {
    return (
      <ProductListStyles.LoadingContainer>
        <Loading />
      </ProductListStyles.LoadingContainer>
    );
  }

  return (
    <ProductListStyles.ListContainer>
      {children}
    </ProductListStyles.ListContainer>
  );
};
