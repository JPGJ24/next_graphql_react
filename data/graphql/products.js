import { gql } from '@apollo/client';

const PRODUCT_FIELDS = gql`
  fragment ProductFields on Product {
    id
    name
    description
    useConditions
    warnings
    productsImages {
      edges {
        node {
          images {
            mediaItemUrl,
            altText
          }
        }
      }
    }
    cover {
      mediaItemId
      mediaItemUrl
      altText
      caption
      description
    }
  }
`;

export const ALL_PRODUCTS_QUERY = gql`
  query allProducts {
    products {
      nodes {
        ...ProductFields
      }
    }
  }
  ${PRODUCT_FIELDS}
`;


