import { ALL_COLORS_QUERY} from "../../data/graphql/colorContainerReuse";
import { getApolloClient } from "../apollo-client";

export async function getAllHomeColors() {
  const client = getApolloClient();
  const { data } = await client.query({
    query: ALL_COLORS_QUERY,
  });

  return data.colorContainerReuses.nodes;
}
