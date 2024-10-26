import { ApolloProvider as Provider } from '@apollo/client/react';
import { client } from '../../configs/graphql/client';

interface ApolloProviderProps {
  children: React.ReactNode;
}

export const ApolloProvider: React.FC<ApolloProviderProps> = ({ children }) => {
  return <Provider client={client}>{children}</Provider>;
};
