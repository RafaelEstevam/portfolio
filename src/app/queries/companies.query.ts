import { gql } from "./config";

const GET_companies = gql`
  query Companies {
    companies {
      id
      name,
      logo {
        width,
        height,
        fileName,
        url
      }
      moreInformations {
        html
      },
      companyPage,
      resume{
        __typename ... on Resume {
          name,
          description
        }
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
      categories{
        name
      },
      isGraduation
    }
  }
`;

const GET_company_by_id = (id: string) => {
  const query = gql`
    query Company {
      company (where: {id: "${id}" }) {
        id
        name,
        logo {
          width,
          height,
          fileName,
          url
        }
        moreInformations {
          html
        },
        companyPage,
        resume{
          __typename ... on Resume {
            name,
            description
          }
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
        categories{
          name
        }
      }
    }
  `;

  return query;
}

export {
  GET_companies,
  GET_company_by_id
}