const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  type Cart {
    id: ID!
    user_id: ID!
  }

  type Product {
    id: ID!
    itemName: String!
    priceUsd: Float!
    country: String!
    image: String
    description: String!
  }

  type ProductInCart {
    id: ID!
    productId: ID!
    cartId: ID!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(email: String!): User
    products: [Product]!
    product(id: ID!): Product
    cart(userId: ID!): [Product]!
    country(country: String!): [Product]!
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(userId: ID!, firstName: String, lastName: String, email: String, password: String): User
    deleteUser(userId: ID!): User
    login(email: String!, password: String!): Auth
    addProduct(productId: ID!,
               itemName: String!,
               priceUsd: Float!,
               country: String,
               image: String,
               description: String!): Product
    updateProduct(productId: ID!,
                  itemName: String,
                  priceUsd: Float,
                  country: String,
                  image: String,
                  description: String): Product
    deleteProduct(productId: ID!): Product
    addToCart(cartId:ID!, productId: ID!): Cart
    removeFromCart(cartId: ID!, productId: ID!): Cart
  }
`;

module.exports = typeDefs;

