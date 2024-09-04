const typeDefs = `
  type Item {
    _id: ID
    name: String
    img: String
    cost: Int
    calories: Int
  }

  type Query {
    items: [Item]!
  }
`;

module.exports = typeDefs;
