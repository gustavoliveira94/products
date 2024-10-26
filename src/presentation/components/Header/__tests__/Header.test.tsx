/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react';

import { Header } from '../Header';

jest.mock('core/hooks/useOrder', () => ({
  useOrder: () => ({
    subTotal: '$100',
  }),
}));

describe('Testing <Header /> Components', () => {
  it('renders the logo and subtotal', () => {
    const { getByAltText, getByText } = render(<Header />);

    expect(getByAltText('logo')).toBeInTheDocument();
    expect(getByText('$100')).toBeInTheDocument();
  });
});
