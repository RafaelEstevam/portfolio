import { gql } from "./config";

const GET_posts = gql`
  query Posts {
    posts (first: 2, orderBy: createdAt_DESC, stage: PUBLISHED){
      id
      title,
      slug,
      shortText
    }
  }
`;

export {
  GET_posts,
}