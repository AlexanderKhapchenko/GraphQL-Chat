const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const Subscription = require('./resolvers/Subscription');


const resolvers = {
  Query,
  Mutation,
  Subscription,
	Message: {
		...require("./resolvers/Message"),
	},
	Reply: {
		...require("./resolvers/Reply"),
	}
};

const server = new GraphQLServer({ 
  typeDefs: './src/schema.graphql',
  resolvers,
  context: { prisma }
});

server.start(() => console.log('Server is running on localhost:4000'));