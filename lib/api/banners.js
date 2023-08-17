import { ALL_BANNER_QUERY} from "../../data/graphql/banners";
import { getApolloClient } from "../apollo-client";

export async function getAllBanners() {
  const client = getApolloClient();
  const { data } = await client.query({
    query: ALL_BANNER_QUERY,
  });

  return data.banners.nodes;
}
