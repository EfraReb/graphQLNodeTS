import { GraphQLInt, GraphQLObjectType, GraphQLObjectTypeConfig, GraphQLString } from "graphql";
import { PageGeneric } from "./PageGeneric";

export class ResponseGeneric extends GraphQLObjectType {
    constructor() {
        super(<GraphQLObjectTypeConfig<any, any>> {
            name: "ResponseGeneric",
            fields: {
                internalCode: { type: GraphQLInt },
                message: { type: GraphQLString },
                payload: { type: new PageGeneric() }
            }
        });
    }
}
