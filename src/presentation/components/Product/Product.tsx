import { useProduct } from './hooks/useProduct';

import { ProductStyles } from './Product.styles';

interface ProductProps {
  product: {
    id: string;
    name: string;
    price: string;
    image: string;
    description: string;
    fullDescription: string;
  };
  buyProduct: ({
    productVariantId,
    quantity,
  }: {
    productVariantId: string;
    quantity: number;
  }) => void;
}

export const Product: React.FC<ProductProps> = ({ product, buyProduct }) => {
  const { handleQuantity, quantity } = useProduct();

  return (
    <ProductStyles.Item data-testid="product">
      <ProductStyles.Image src={product.image} alt={product.image} />
      <ProductStyles.Name>{product.name}</ProductStyles.Name>
      <ProductStyles.Description title={product.fullDescription}>
        {product.description}
      </ProductStyles.Description>
      <ProductStyles.Price>
        <b>Price:</b> {product.price}
      </ProductStyles.Price>
      <ProductStyles.Actions>
        <button
          onClick={() => buyProduct({ productVariantId: product.id, quantity })}
        >
          Buy
        </button>
        <div>
          <button onClick={() => handleQuantity({ value: quantity + 1 })}>
            +
          </button>
          <p>{quantity}</p>
          <button onClick={() => handleQuantity({ value: quantity - 1 })}>
            -
          </button>
        </div>
      </ProductStyles.Actions>
    </ProductStyles.Item>
  );
};
