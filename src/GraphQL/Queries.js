import { gql } from "@apollo/client";

export const CATEGORIES = gql`
  {
    categories {
      name
    }
  }
`;
export const LOAD_USERS = gql`
  query all {
    categories {
      products {
        id
        name
        inStock
      }
    }
  }
`;
