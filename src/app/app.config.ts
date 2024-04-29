import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { Apollo, APOLLO_OPTIONS } from "apollo-angular";
import { HttpLink } from 'apollo-angular/http';
import { ApolloClientOptions, ApolloLink, InMemoryCache } from '@apollo/client/core';
import { graphApi } from "./graphql.config";
import { HttpClientModule } from "@angular/common/http";

import { importProvidersFrom } from "@angular/core";

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter(routes),
    {
      provide: APOLLO_OPTIONS,
      useFactory: (
        httpLink: HttpLink,
      ): ApolloClientOptions<unknown> => ({
        link: ApolloLink.from([
          httpLink.create({ uri: graphApi }),
        ]),
        cache: new InMemoryCache(),
      }),
      deps: [HttpLink],
    },
    Apollo,
  ]
};

