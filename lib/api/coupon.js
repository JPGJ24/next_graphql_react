
import { ALL_COUPON_QUERY} from "../../data/graphql/coupon";
import { getApolloClient } from "../apollo-client";

export async function getAllCoupons() {
  const client = getApolloClient();
  const { data } = await client.query({
    query: ALL_COUPON_QUERY,
  });

  return data.coupons.nodes;
}
