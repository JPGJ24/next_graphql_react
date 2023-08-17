import { gql } from '@apollo/client';

const BANNER_FIELDS =gql`
fragment BannerFields on Banner {
  name
    images {
      sourceUrl
      altText
    }
  }`

  
export const ALL_BANNER_QUERY = gql`
  query allBanners {
    banners {
      nodes {
        ...BannerFields
      }
    }
  }
  ${BANNER_FIELDS}
`;

