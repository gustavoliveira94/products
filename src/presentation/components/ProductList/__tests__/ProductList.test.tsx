/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react';

import { ProductList } from '../ProductList';

describe('Testing <ProductList /> Component', () => {
  it('Should render loading', () => {
    const { getByTestId } = render(
      <ProductList loading={true}>Component</ProductList>
    );

    expect(getByTestId('loading')).toBeInTheDocument();
  });

  it('Should render component', () => {
    const { getByText } = render(
      <ProductList loading={false}>Component</ProductList>
    );

    expect(getByText('Component')).toBeInTheDocument();
  });
});
