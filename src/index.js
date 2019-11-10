import { ApolloServer } from 'apollo-server';
import createSchema from './graphql';

const server = new ApolloServer({
    schema: createSchema()
});

server.listen().then(({url}) => {
    console.log(`Server ready at ${url}`);
});