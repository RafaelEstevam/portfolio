import { gql } from "./config";

const GET_portfolios = gql`
  query Portfolios {
    portfolios {
      id,
      name,
      coverImage {
        id,
        fileName,
        width,
        height,
        url
      },
      moreInformations{
        html
      },
      links{
        __typename ... on Action {
          name,
          url
        }
      },
      startEndDate{
        __typename ... on StartEndDate{
          isCurrent,
          startDate,
          endDate
        }
      },
      categories {
        id,
        name
      },
    }
  }
`;

const GET_portfolio_by_id = (id: string) => {
  const query = gql`
    query Portfolio {
      portfolio (where: {id: "${id}" }) {
        id,
        name,
        coverImage {
          id,
          fileName,
          width,
          height,
          url
        },
        moreInformations{
          html
        },
        links{
          __typename ... on Action {
            name,
            url
          }
        },
        startEndDate{
          __typename ... on StartEndDate{
            isCurrent,
            startDate,
            endDate
          }
        },
        categories {
          id,
          name
        },
      }
    }
  `;

  return query;
}

export {
  GET_portfolios,
  GET_portfolio_by_id
}