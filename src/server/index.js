import express from 'express';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';
const app = express();

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = { hello: () => 'Hello world!' };

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(3001, () => console.log('Now browse to localhost:3001/graphql'));
