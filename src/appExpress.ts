import * as dotenv from 'dotenv';
import express = require('express');
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import { schema } from './graphQL/Schema';
import { root } from './graphQL/Root';

class App {
    public express: any;
    public dotenv: any;

    constructor() {
        this.dotenv = dotenv.config();
        this.express = express();
        this.init();
    }

    /* schema = buildSchema(
        `
        type Query {
            greeting: String
        }
        `
    );
    root = {
        greeting: () => 'Hello World!'
    }; */

    private init(): void {
        this.express.use("/graphql", graphqlHTTP((request, response, graphQLParams) => ({
            schema: schema,
            rootValue: root,
            graphiql: process.env.NODE_ENV !== "production" ? true : false,
            context: {
                request: request
            }
        })));
    }
}

export default new App().express;