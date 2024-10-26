import styled, { keyframes } from 'styled-components';

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px;
  max-width: 1200px;
  margin: 0 auto;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100px;
    height: 100px;
    animation: ${rotate} 1s linear infinite;
  }
`;

export const ProductListStyles = {
  ListContainer,
  LoadingContainer,
};
