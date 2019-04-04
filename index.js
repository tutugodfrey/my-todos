import { GraphQLServer } from 'graphql-yoga';
import { prisma } from './generated/prisma-client';
import dotenv from 'dotenv-safe';

dotenv.config()

const resolvers = {
  Query: {
    // query goes here
    getUsers(parent, args, context) {
      return context.prisma.users();
    }
  },

  Mutation: {
    // mutation goes here
    createUser(parent, args, context) {
      console.log(args.password)
      if (!args.password) {
        return 'please provide your password'
      }
      const result = context.prisma.createUser({
        fullname: args.fullname,
        email: args.email
      });

    }
  },
}

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: {
    prisma
  }
});

const port = process.env.NODE_PORT || 3000;

server.start({port}, () =>  {
  console.log(`Server is running on port ${port}`)
});
