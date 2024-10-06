import { ApolloServer, gql } from "apollo-server";
import typeDefs from "./schema.mjs";
import resolvers from "./resolvers.mjs";

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log("server started: " + url);
});
