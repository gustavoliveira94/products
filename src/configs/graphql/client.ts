import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';

import { BASE_URL_GRAPHQL } from 'core/utils/constants';
import { getItem, setItem } from 'core/utils/storage';

const commerceLink = createHttpLink({
  uri: BASE_URL_GRAPHQL,
  headers: {
    authorization: getItem('Auth-Token')
      ? `Bearer ${getItem('Auth-Token')}`
      : '',
  },
});

const afterwareLink = new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    const context = operation.getContext();
    const authHeader = context.response.headers.get('Vendure-Auth-Token');

    if (authHeader) {
      setItem('Auth-Token', authHeader);
    }

    return response;
  });
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([afterwareLink, commerceLink]),
});
