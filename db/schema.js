const { gql } = require("apollo-server");

const typeDefs = gql`
  type Learn {
    title: String
  }
  type Tech {
    tech: String
  }
  type Query {
    getLearns: [Learn]
    getTech: [Tech]
  }

  input UserInput {
    name: String
    email: String
    password: String
  }

  input LogInput {
    email: String!
    password: String!
  }

  type Mutation {
    createUser(input: UserInput): String
    authUser(input: LogInput): String
  }
`;

module.exports = typeDefs;
