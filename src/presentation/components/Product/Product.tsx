import { useState } from 'react';

import { ProductStyles } from './Product.styles';

interface ProductProps {
  product: {
    id: string;
    name: string;
    price: string;
    image: string;
    description: string;
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
  const [quantity, setQuantity] = useState(1);

  const itIsMoreThanOne = quantity > 1;
  const description =
    product.description.length > 100
      ? `${product.description.slice(0, 120)}...`
      : product.description;

  return (
    <ProductStyles.Item data-testid="product">
      <ProductStyles.Image src={product.image} alt={product.image} />
      <ProductStyles.Name>{product.name}</ProductStyles.Name>
      <ProductStyles.Description title={product.description}>
        {description}
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
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
          <p>{quantity}</p>
          <button
            onClick={() => (itIsMoreThanOne ? setQuantity(quantity - 1) : null)}
          >
            -
          </button>
        </div>
      </ProductStyles.Actions>
    </ProductStyles.Item>
  );
};
