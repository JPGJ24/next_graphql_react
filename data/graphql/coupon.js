import { gql } from '@apollo/client';

const COUPON_FIELDS = gql`
fragment CouponFields on Coupon {
    name
    image {
      mediaItemUrl
      altText
    }
    colorName
    backgroundcolor
    backgroundColorBtn
    textBtn
  }
`;

export const ALL_COUPON_QUERY = gql`
  query allCoupons {
    coupons {
      nodes {
        ...CouponFields
      }
    }
  }
  ${COUPON_FIELDS}
`;


