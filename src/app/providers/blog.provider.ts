
import { Apollo, APOLLO_OPTIONS } from "apollo-angular";
import { HttpLink } from 'apollo-angular/http';
import { ApolloClientOptions, ApolloLink, InMemoryCache } from '@apollo/client/core';
import { blogGraphApi } from '../graphql.config';

export default [
  {
    provide: APOLLO_OPTIONS,
    useFactory: (
      httpLink: HttpLink,
    ): ApolloClientOptions<unknown> => ({
      link: ApolloLink.from([
        httpLink.create({ uri: blogGraphApi }),
      ]),
      cache: new InMemoryCache(),
    }),
    deps: [HttpLink],
  },
  Apollo,
]