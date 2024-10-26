import styled from 'styled-components';

const Item = styled.div`
  width: 180px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;

  :hover {
    opacity: 0.9;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-bottom: 1px solid #ddd;
  margin-bottom: 8px;
`;

const Name = styled.h2`
  font-size: 1.2em;
  margin: 8px 0;
  height: 40px;
  text-align: center;
`;

const Price = styled.p`
  font-size: 1em;
  color: #333;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #007bff;
    border: 0;
    padding: 16px;
    width: 80px;
    height: 30px;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
  }

  div {
    display: flex;
    align-items: center;
    gap: 8px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      border-radius: 15px;
      border: 1px solid #007bff;
      cursor: pointer;
      font-weight: bold;
      font-size: 16px;
    }
  }
`;

const Description = styled.p`
  font-size: 14px;
  color: #666;
  text-align: center;
  height: 80px;
`;

export const ProductStyles = {
  Item,
  Image,
  Name,
  Price,
  Actions,
  Description,
};
