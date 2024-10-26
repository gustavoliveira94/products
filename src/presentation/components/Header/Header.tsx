import { useOrder } from '../../../core/hooks/useOrder';
import { HeaderStyles } from './Header.styles';

export const Header: React.FC = () => {
  const { subTotal } = useOrder();

  return (
    <HeaderStyles.Container>
      <img
        src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
        alt="logo"
      />
      <div>
        <p>
          <b>Order:</b> {subTotal}
        </p>
      </div>
    </HeaderStyles.Container>
  );
};
