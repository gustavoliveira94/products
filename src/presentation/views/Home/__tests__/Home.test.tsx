/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react';

import { Home } from '../Home';
import { IProductList } from 'core/entities/Product';

import products from './mock.json';

let mockProducts = [] as IProductList['items'];
let mockLoading = true;

jest.mock('core/hooks/useProducts/useProducts', () => ({
  useProducts: () => ({
    loading: mockLoading,
    products: mockProducts,
    buyProduct: jest.fn(),
  }),
}));

describe('Testing <Home /> Page', () => {
  it('Should render loading', () => {
    mockProducts = [];

    const { getByTestId } = render(<Home />);

    expect(getByTestId('loading')).toBeInTheDocument();
  });

  it('Should render products', () => {
    mockProducts = products as unknown as IProductList['items'];
    mockLoading = false;

    const { getAllByTestId } = render(<Home />);

    expect(getAllByTestId('product')).toHaveLength(3);
  });

  it('Should not render products', () => {
    mockProducts = [];
    mockLoading = false;

    const { getByText } = render(<Home />);

    expect(getByText('No products found!')).toBeInTheDocument();
  });
});
