import { ALL_PRODUCTS_QUERY } from "../../data/graphql/products";
import { getApolloClient } from "../apollo-client";

export async function getAllProducts() {
  const client = getApolloClient();
  const { data } = await client.query({
    query: ALL_PRODUCTS_QUERY,
  });

  return data.products.nodes;
}
