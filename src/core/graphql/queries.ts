import { gql } from '@apollo/client';

const PRODUCT_FIELDS = gql`
  fragment ProductFields on Product {
    id
    name
    description
    assets {
      id
      preview
      source
    }
    variants {
      id
      price
      name
      assets {
        id
        preview
        source
      }
    }
  }
`;

const GET_PRODUCTS = gql`
  query {
    products {
      totalItems
      items {
        ...ProductFields
      }
    }
  }
  ${PRODUCT_FIELDS}
`;

export { GET_PRODUCTS };
