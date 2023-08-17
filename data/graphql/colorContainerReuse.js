import { gql } from '@apollo/client';

const BANNER_COLORS =gql`
fragment ColorContainerReuseFields on ColorContainerReuse {
  lightColor
  darkColor
  color
}`

  
export const ALL_COLORS_QUERY = gql`
    query allColorContainerReuses {
      colorContainerReuses{
    nodes {
      ...ColorContainerReuseFields
    }
  }
}
  ${BANNER_COLORS}
`;

