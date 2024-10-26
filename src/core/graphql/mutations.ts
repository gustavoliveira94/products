import { gql } from '@apollo/client';

const MUTATION_ADD_ITEM_TO_ORDER = gql`
  mutation AddItemToOrder($productVariantId: ID!, $quantity: Int!) {
    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
      ... on Order {
        totalWithTax
      }
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;

export { MUTATION_ADD_ITEM_TO_ORDER };
