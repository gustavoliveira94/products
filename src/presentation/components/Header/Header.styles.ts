import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  height: 80px;
  color: #fff;
  padding: 0 20px;
  position: relative;

  img {
    width: 160px;
  }

  div {
    position: absolute;
    right: 20px;
  }
`;

export const HeaderStyles = {
  Container,
};
