/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from '@testing-library/react';

import { Product } from '../Product';

// jest.mock('core/hooks/useProducts', () => ({
//     useProducts: () => ({
//         loading: true,
//         products: [],
//         buyProduct: jest.fn(),
//     }),
// }));

describe('Testing <Product /> Component', () => {
  it('Should render a product', () => {
    const product = {
      id: '1',
      name: 'Product 1',
      price: '100',
      image: 'image',
      description: 'description',
    };

    const { getByText, getByAltText } = render(
      <Product product={product} buyProduct={jest.fn()} />
    );

    expect(getByText('Product 1')).toBeInTheDocument();
    expect(getByText('100')).toBeInTheDocument();
    expect(getByAltText('image')).toBeInTheDocument();
    expect(getByText('description')).toBeInTheDocument();
  });

  it('Should increase and decrease the quantity', () => {
    const product = {
      id: '1',
      name: 'Product',
      price: '100',
      image: 'image',
      description: 'description',
    };

    const { getByText } = render(
      <Product product={product} buyProduct={jest.fn()} />
    );

    const plusButton = getByText('+');
    const minusButton = getByText('-');

    fireEvent.click(plusButton);

    expect(getByText('2')).toBeInTheDocument();

    fireEvent.click(minusButton);

    expect(getByText('1')).toBeInTheDocument();
  });

  it('Should click on button', () => {
    const product = {
      id: '1',
      name: 'Product',
      price: '100',
      image: 'image',
      description: 'description',
    };

    const buyProduct = jest.fn();

    const { getByText } = render(
      <Product product={product} buyProduct={buyProduct} />
    );

    const buyButton = getByText('Buy');

    fireEvent.click(buyButton);

    expect(buyProduct).toHaveBeenCalledTimes(1);
  });
});
