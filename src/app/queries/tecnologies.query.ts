import { gql } from "./config";

const GET_tecnologiesLists = gql`
  query TecnologiesList {
    tecnologiesLists {
      id,
      isMain,
      tecnologies {
        __typename ... on Tecnology {
          name,
          isMain
        }
      }
    }
  }
`;

export {
  GET_tecnologiesLists
}