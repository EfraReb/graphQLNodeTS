import { GraphQLInt, GraphQLObjectType, GraphQLObjectTypeConfig, GraphQLString } from "graphql";

export class ResponseSample extends GraphQLObjectType {
    constructor() {
        super(<GraphQLObjectTypeConfig<any, any>> {
            name: "ResponseSample",
            fields: {
                internalCode: { type: GraphQLInt },
                message: { type: GraphQLString },
                payload: { type: GraphQLInt }
            }
        });
    }
}